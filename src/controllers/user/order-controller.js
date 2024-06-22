const OrderModel = require('../../models/user/order-model');
const BasketModel = require('../../models/user/basket-model');

class OrderController {
    // [POST]
    async createOrder(req, res) {
        const {
            order_id,
            payment_method,
            total_amount,
            discount_amount,
            address_id,
            voucher_id,
            order_message,
            basket_id 
        } = req.body;
        try {
            if (!Array.isArray(basket_id) || basket_id.length === 0) {
                throw new Error('Basket IDs must be provided as a non-empty array.');
            }

            const insertValues = [
                order_id,
                payment_method,
                total_amount,
                discount_amount,
                address_id,
                voucher_id,
                order_message
            ];


            const orderInsertResult = await OrderModel.insertOrder(insertValues);
            
            if (orderInsertResult.affectedRows > 0) {
                const basketUpdateResult = await BasketModel.updateOrderIdBasket(order_id, basket_id);
                
                if (basketUpdateResult.affectedRows > 0) {
                    res.send({ status: "success", message: "Order created successfully" });
                } else {
                    await OrderModel.deleteOrder(order_id);
                    res.send({ status: "error", message: "Order created but failed to update basket" });
                }
            } else {
                res.send({ status: "error", message: "Failed to create order" });
            }

        } catch (error) {
            res.send({ status: "error", message: "Failed to create order" });
            console.error("Error creating order:", error);
        }
    }
    //[GET]
    async getOrder(req, res) {
        const email_user = req.params.email_user;
        
        console.log("Email:", email_user);

        try {
            const results = await OrderModel.getOrders(email_user);
            res.send(results);
        } catch (error) {
            res.send({ status: "error", message: "Failed to get orders" });
            console.error("Error getting orders:", error);
        }
    }
    //[PUT]
    async updateStatusOrder(req, res) {
        const order_id= req.params.order_id
        const status_order = req.body.status_order
        const reason = req.body.reason
        console.log("Reason ", reason)

        try {
            const updateValues=[status_order, order_id]
            console.log("Order staus", updateValues+reason)
           const result= await OrderModel.updateStatusOrder(updateValues);
                
           if (result.affectedRows > 0) {
                res.status(200).json({ status: "success", message: "Order status updated successfully" });
            } else {
                res.status(404).json({ status: "error", message: "Order not found or status not updated" });
            }
        } catch (error) {
            res.send({ status: "error", message: "Failed update status orders" });            
            console.error("Error creating order:", error);
        }

    }

        
    
}

module.exports = new OrderController();
