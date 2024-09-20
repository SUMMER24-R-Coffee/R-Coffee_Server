const OrderModel = require('../../models/manager/order-model')
const BasketModel = require('../../models/manager/basket-model')
const dateTimeFormat = require('../../utils/date-time-format')
const CancelModel =require('../../models/user/cancel-model')
const NotificationModel = require("../../models/user/notification-model");
const sendNotification = require("../../utils/sendNotification");
class orderController{
    async getOrder(req,res){
        
        try {
            const orders = await OrderModel.getOrders();
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
    
            const formattedOrder = orders.map(order => {
                const statusMap = {
                    'pending': 'badge-warning',
                    'preparing': 'badge-info',
                    'pick up': 'badge-info',
                    'delivering': 'badge-info',
                    'cancelled': 'badge-danger',
                    'delivered': 'badge-success'
                };
            
                const statusClass = statusMap[order.status_order] || '';  
            
                return {
                    ...order,
                    _date: dateTimeFormat.formateDate(order.create_at),
                    _time: dateTimeFormat.formateTime(order.create_at),
                    statusClass: statusClass
                };
            });
  
            res.render('order',{
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user:user,       
                orders: formattedOrder      
            })            
        } catch (error) {
            console.error('err',error)
        }        
    }
    
    async getOrderDetail(req, res) {
        try {
            const order_id = req.params.order_id;
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
    
            const orderDetail = await OrderModel.getOder(order_id);
            const baskets = await BasketModel.getBaskets(order_id);
    
            const formattedDetail = orderDetail.map(order => {
                const totalAmount = order.total_amount;
                const discountAmount = order.discount_amount;
                const shipping_fee = order.shipping_fee;
                const totalWithDiscount = totalAmount + discountAmount - shipping_fee;                
                return {
                    ...order,
                    order_date: dateTimeFormat.formatDateTime(order.create_at),
                    totalWithDiscount: totalWithDiscount,
                };
            });
        
    
            res.render('order-detail', {
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user: user,    
                order: formattedDetail,
                basket: baskets         
            });            
        } catch (error) {
            console.error('Error fetching order details:', error);
        }          
    }
    async updateStatusOrder(req, res) {
        try {
            const order_id = req.params.order_id;
            const email_user = req.body.email_user;
            const token = req.body.token;
            const reason =req.body.reason;
            const status_order=req.body.status_order

            const updateValues = [status_order, order_id];
            const cancelInsertValues = [reason, order_id];
            let title;
            let message;
    
            switch (status_order) {
                case "pick up":
                    title = "Order Pick Up";
                    message = `Order: ${order_id}. Shipper has picked up your order.`;
                    break;
                case "preparing":
                    title = "Order Preparing";
                    message = `Order: ${order_id}. Your order is being prepared.`;
                    break;
                case "delivering":
                    title = "Order Delivering";
                    message = `Order: ${order_id}. Your order is on its way to you.`;
                    break;
                case "cancelled":
                    title = "Order Cancelled";
                    message = `Order: ${order_id}. ${reason}`;
                    await CancelModel.insertCancel(cancelInsertValues);

                    break;
                default:
                    throw new Error('Invalid status_order value');
            }

    
            await OrderModel.updateStatus(updateValues);
            await NotificationModel.saveNotification(title, message, email_user, order_id);
            await sendNotification(token, title, message);
    
            req.flash("notificationSuccess", "Order status updated");
            res.redirect(`/order/order-detail/${order_id}`);
        } catch (error) {
            console.error('Error:', error);
            req.flash("notificationErr", "Error updating order status");
            res.redirect(`/order/order-detail/${order_id}`);
        }
    }
    
    

}
module.exports=new orderController()