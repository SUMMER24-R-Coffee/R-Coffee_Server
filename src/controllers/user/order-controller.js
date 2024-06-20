const OrderModel = require('../../models/user/order-model');
const BasketModel = require('../../models/user/basket-model');
const { con } = require('../../config/connection');

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
        console.log("Basket ids 😬😬😬", order_id);
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
}

module.exports = new OrderController();
