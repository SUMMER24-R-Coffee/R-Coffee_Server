const PaymenModel = require("../../models/user/payment-detail_model")
const NotificationModel = require("../../models/user/notification-model");
const sendNotification = require("../../utils/sendNotification");
class paymentDetailController{
    //[POST]
    async insertPaymentDetail(req,res){
        const {status, order_id, email_user, token}=req.body
        console.log("Infor detail", status+order_id);

        try {
            const insertValues = [status, order_id]

            let title;
            let message;
            if(status=="paid"){
                title="Payment Succesful"
                message = `Order: ${order_id}: has been paid successfully`;
            }else{
                title="Payment Failed"
                message = `Order: ${order_id}: not pay yet`;
            }
            await NotificationModel.saveNotification(title, message, email_user, order_id);
            await sendNotification(token, title, message);
            await PaymenModel.insertPaymentDetail(insertValues)
             
            console.log(" save payment detai successful");

        } catch (error) {
            console.error("Error save payment detai;:", error);

        }
    }

    async updatePaymentDetail(req, res){
        const order_id = req.params.order_id
        const {status, email_user, token}=req.body
        try {
            const updateValue = [status, order_id]
            
            let title;
            let message;
            if(status=="paid"){
                title="Payment Succesful"
                message = `Order: ${order_id}: has been paid successfully`; 
            }else{
                title="Payment Failed"
                message = `Order: ${order_id}: failed to pay`;
            }

            const result = await PaymenModel.updatePaymentDetail(updateValue)
            if (result.affectedRows > 0) {

                await NotificationModel.saveNotification(title, message, email_user, order_id);
                await sendNotification(token, title, message);

                console.log("Payment detail","Success")
                res.status(203).send({status:"success", message:"Success" });
            }else{
                res.status(405).send({status:"error", message:"Failed" });
                console.log("Payment detailERRORR","ERRORR")

            }            
        } catch (error) {
            console.error("Error repay", error)
        }
    }

}
module.exports= new paymentDetailController()