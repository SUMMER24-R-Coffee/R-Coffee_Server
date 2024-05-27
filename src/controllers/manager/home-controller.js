class homeController {
    async home(req, res) {
        const notificationSuccess = req.flash('notificationSuccess');
        const notificationErr = req.flash('notificationErr');  
        const user = req.session.user;   
        console.log('us', user)
        res.render('index',{
            notificationSuccess: notificationSuccess,
            notificationErr: notificationErr,
            user: user
        })
    }
}
module.exports = new homeController()