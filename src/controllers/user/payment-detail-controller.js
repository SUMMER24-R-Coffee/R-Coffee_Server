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

    async updatePaymentDetail(req, res){
        const order_id = req.params.order_id
        const status = req.body.status
        try {
            const updateValue = [status, order_id]
            const result = await PaymenModel.updatePaymentDetail(updateValue)
            if (result.affectedRows > 0) {
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