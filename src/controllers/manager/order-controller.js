class orderController{
    async order(req,res){
        
        try {
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
  
            res.render('order',{
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user:user,             
            })            
        } catch (error) {
            console.error('err',error)
        }        
    }
    
    async orderDetail(req, res){
        try {
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
  
            res.render('order-detail',{
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user:user,             
            })            
        } catch (error) {
            console.error('err',error)
        }          
    }

}
module.exports=new orderController()