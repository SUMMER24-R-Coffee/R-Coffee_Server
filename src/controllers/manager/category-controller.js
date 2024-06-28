const CategoryModel =  require("../../models/manager/category-model")

class categoryController{
    async getCategory(req,res){
        try {
            const categories = await CategoryModel.getCategorys();
            const notificationSuccess = req.flash('notificationSuccess');
            const notificationErr = req.flash('notificationErr'); 
            const user = req.session.user;   
  
            res.render('category',{
                categories: categories,
                notificationErr: notificationErr,
                notificationSuccess: notificationSuccess,   
                user:user,             
            })            
        } catch (error) {
            console.error('err',error)
        }

    }

    async addCategory(req, res){
        const name =req.body.name
        try {
            await CategoryModel.insertCategory(name); 
    
            req.flash("notificationSuccess", "Category added successfully");
            console.log("added successfully");
            res.redirect("/category");
        } catch (error) {s
            req.flash("notificationErr", "Category added Failed");
            console.log("added failed");
            res.redirect("/category");
        }
    }

    async updateCategory(req, res){
        const category_id = req.params.category_id;
        const name = req.body.name
        try {
            const updateValues=[name, category_id]
            console.log("name🥲🥲🥲🥲", name)
            console.log("ID", category_id)


            await CategoryModel.updateCategory(updateValues); 
    
            req.flash("notificationSuccess", "Category updated successfully");
            console.log("updated successfully");
            res.redirect("/category");
        } catch (error) {
            req.flash("notificationErr", "Category updated Failed");
            console.log("updated failed");
            res.redirect("/category");
        }        
    }
}
module.exports = new categoryController()