const authServer = async (req,res,next)=>{
    if (!req.session.user) {
        return res.redirect('/login'); 
      }
    
      if (req.session.user[0].emp_role !== 'manager') {
        req.flash('notificationErr', 'You cannot access this function');
        return res.redirect('/home');
      }
      next();    
}

module.exports = {
    authServer,

}