const OrderModel = require('../../models/user/order-model');

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
            order_message
        } = req.body;

        try {
            const values = [
                order_id,
                payment_method,
                total_amount,
                discount_amount,
                address_id,
                voucher_id,
                order_message
            ];

            await OrderModel.insertOrder(values);
            res.send({ status: "success", message: "Order created successfully" });
        } catch (error) {
            res.send({ status: "error", message: "Failed to create order" });
            console.error("Error creating order:", error);
        }
    }
}

module.exports = new OrderController();