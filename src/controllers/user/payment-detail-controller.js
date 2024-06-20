const PaymenModel = require("../../models/user/payment-detail_model")

class paymentDetailController{
    //[POST]
    async insertPaymentDetail(req,res){
        const {status, order_id}=req.body
        console.log("Infor detail", status+order_id);

        try {
            const insertValues = [status, order_id]
            await PaymenModel.insertPaymentDetail(insertValues)
            console.log(" save payment detai successful");

        } catch (error) {
            console.error("Error save payment detai;:", error);

        }
    }

}
module.exports= new paymentDetailController()