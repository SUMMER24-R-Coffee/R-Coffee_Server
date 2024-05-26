class employeeController{
    async employee(req,res){
        res.render('employee')
    }
}
module.exports=new employeeController()