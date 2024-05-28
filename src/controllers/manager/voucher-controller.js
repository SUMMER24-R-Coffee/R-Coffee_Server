class voucherController{
    async voucher(req,res){
        try {
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
  
            res.render('voucher',{
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user:user,             
            })            
        } catch (error) {
            console.error('err',error)
        }          
    }

}
module.exports=new voucherController()