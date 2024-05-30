const EmployeeModel=require('../../models/manager/employee-model')
const upload = require("../../middlewares/upload");
const cloudinary = require("../../middlewares/cloundinary");


class employeeController{
    async getEmployee(req,res){
        try {
            const employees = await EmployeeModel.getEmployees();
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
  
            res.render('employee',{
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user:user,      
                employees: employees       
            })            
        } catch (error) {
            console.error('err',error)
        }        
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

    async insertEmployee(req, res){
        upload.single("img")(req, res, async function(err) {
            if (err) {
              console.error("Error uploading image:", err);
              req.flash("notificationErr", "Error uploading image.");
              res.redirect("/employee");
              return;
            }
      
            const { emp_id, emp_password, emp_name, emp_gender, emp_phone } = req.body;
      
            if (!req.file) {
              req.flash("notificationErr", "No image selected.");
              res.redirect("/employee");
              return;
            }
      
            try {
              const result = await cloudinary.uploader.upload(req.file.path, {
                resource_type: "image",
                folder: "rcoffee/employee"
              });
              const emp_img = result.secure_url;

              const insertValues = [emp_id, emp_password, emp_name, emp_gender, emp_img, emp_phone];
              console.log('🙄🙄🙄🙄', insertValues)
              const checkEmpID = await EmployeeModel.checkEmployee(emp_id);

              if(checkEmpID.length >0){
                req.flash("notificationErr", "Employee ID has been used.");
                res.redirect("/employee");
                return;
              }

              await EmployeeModel.insertEmployee(insertValues);
      
              req.flash("notificationSuccess", "Employee added successfully.");
              res.redirect("/employee");
            } catch (error) {
              console.error("Error adding Employee:", error.message);
              req.flash("notificationErr", "Error adding Employee: " + error.message);
              res.redirect("/employee");
            }
          });        

    }
    
    async deleteEmployee (req, res){
        try {
            const emp_id = req.params.emp_id;
            await EmployeeModel.deleteEmployee(emp_id);            
            
            req.flash("notificationSuccess", "Employee deleted");
            res.redirect("/employee");
        } catch (error) {
            req.flash("notificationErr", "Error"+ error);
            console.log('🥹🥹🥹', error)
            res.redirect("/employee");
            
        }        

    }
}
module.exports=new employeeController()