const EmployeeModel=require('../../models/manager/employee-model')

class employeeController{
    async employee(req,res){
        res.render('employee')
    }

    async getLogin(req,res){
        const notificationSuccess = req.flash('notificationSuccess');
        const notificationErr = req.flash('notificationErr');
                
        res.render('login',{
            notificationSuccess:notificationSuccess,
            notificationErr:notificationErr
        })
    }

    async checkLogin(req, res) {
        const emp_id = req.body.emp_id;
        const emp_password = req.body.emp_password;
    
        try {
            const results = await EmployeeModel.getLogin(emp_id);
    
            if (!results) { 
                req.flash('notificationErr', 'User does not exist');
                res.redirect('/login');
            } else {
                const storedPassword = results.emp_password;
                if (emp_password !== storedPassword) {
                    req.flash('notificationErr', 'Incorrect password');
                    res.redirect('/login');
                } else {
                    req.session.user = results;
                    console.log('Session User:', req.session.user);
                    req.flash('notificationSuccess', 'Login successful');
                    res.redirect('/home');
                }
            }
        } catch (err) {
            console.error('Error:', err.message);
            req.flash('notificationErr', 'Error: ' + err.message);
            res.redirect('/login');
        }
    }
    
}
module.exports=new employeeController()