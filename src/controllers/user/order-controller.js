const OrderModel = require('../../models/user/order-model');
const BasketModel = require('../../models/user/basket-model');
const CancelModel =require('../../models/user/cancel-model')
const NotificationModel = require("../../models/user/notification-model");
const sendNotification = require("../../utils/sendNotification");
const { formatCurrency } = require("../../utils/formatCurrency"); 
const stripe = require('stripe')('sk_test_51PXGt92MK7lgPTnSxHiernvtEp9bda0ToMDx0jITHwzKJdSr5HAGRmb5vUaAPhUKUERS51VD692kD7QioGXG6jDM00ZNbsnjFS'); 

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
            basket_id,
            email_user,
            token
        } = req.body;
        console.log("EMAIL ORDER!====😜🌶️😜🙄🤣😏:", email_user+token);

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
            const formattedTotalAmount = formatCurrency(total_amount);


            const title = "Order Created";
            const message = `Order: ${order_id}: ${formattedTotalAmount} has been created`;

            const orderInsertResult = await OrderModel.insertOrder(insertValues);

            
            if (orderInsertResult.affectedRows > 0) {
                const basketUpdateResult = await BasketModel.updateOrderIdBasket(order_id, basket_id);
                await NotificationModel.saveNotification(title, message, email_user, order_id);
                await sendNotification(token, title, message); 
    
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

        const {
            status_order,
            reason,
            email_user,
            token
        } = req.body;       

        console.log("Reason 🌶️🌶️🌶️🌶️🌶️", reason)

        try {
            const updateValues=[status_order, order_id]
            console.log("Order staus", updateValues+reason)
           const result= await OrderModel.updateStatusOrder(updateValues);
                
           if (result.affectedRows > 0) {
            if(status_order=="delivered"){
                const title = "Order Receiveds";
                const message = `Order: ${order_id}: has been completed`;
                
                await NotificationModel.saveNotification(title, message, email_user, order_id);
                await sendNotification(token, title, message);                
            }
            if (reason !== undefined && reason !== "") {
                const cancelInsertValues = [reason, order_id];
                const title = "Order Cancelled";
                const message = `Order: ${order_id}: has been cancelled for reason: ${reason}`;

                await NotificationModel.saveNotification(title, message, email_user, order_id);
                await sendNotification(token, title, message);
                await CancelModel.insertCancel(cancelInsertValues);
            }            
                res.status(200).json({ status: "success", message: "Order status updated successfully" });                
            } else {
                res.status(404).json({ status: "error", message: "Order not found or status not updated" });
            }
        } catch (error) {
            res.send({ status: "error", message: "Failed update status orders" });            
            console.error("Error creating order:", error);
        }

    }

    async createPaymentIntent(req, res) {
        const { total_amount, currency } = req.body;
        console.log("STRIPE 😬😬😬😬😬 ", currency + total_amount)

        try {
            const paymentIntent = await stripe.paymentIntents.create({
                amount: Math.round(2 * 100),
                currency: currency,
            });
    
            res.send({
                clientSecret: paymentIntent.client_secret,
            });
        } catch (error) {
            console.error("Error creating PaymentIntent:", error);
            res.status(500).send({ status: "error", message: "Failed to create PaymentIntent" });
        }
    }        
    
}

module.exports = new OrderController();
