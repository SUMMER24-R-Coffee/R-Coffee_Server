class orderController{
    async order(req,res){
        res.render('order')
    }
    
    async orderDetail(req, res){
        res.render('order-detail')
    }

}
module.exports=new orderController()