const UserModel = require("../../models/user/user-model");

class userController {
  // [POST]
  async getLogin(req, res) {
    const email_user = req.body.email_user;
    const password = req.body.password;
    console.log("Infor 🌶️🌶️🌶️🌶️", email_user);

    try {
      const result = await UserModel.getUser(email_user);
      console.log("Infor😏😏😏😏", email_user);
      console.log("Infor😏😏😏😏", password);


      if (result.length === 0) {
          res.json({
            status: "error",
            message: "User does not exist" 
        });
      } else {
        if (result[0].password===password) {
          res.json({
            status: "success",
            message: "Login successful",
            users: {
              email_user: result[0].email_user,
              gender: result[0].gender,
              phone: result[0].phone,
              user_img: result[0].user_img,
              name: result[0].name,
            }
          });        
        } else {
          res.json({
            status: "error",
            message: "Password is incorrect" });
        }
      }
    } catch (error) {
      console.log("Erorr login 🌶️🌶️🌶️🌶️", error);
      res.json({status: "error", message: "Error" + error });
    }
  }
  // [POST]
  async getRegister(req,res){
    const email_user = req.body.email_user;
    const password = req.body.password;

    try {
      
      const checkEmail = await UserModel.checkUser(email_user);

      if(checkEmail[0].count>0){
        res.status(401).json({ message: "Email has already registed" });
        return
      }

      const values = [email_user, password]
      await UserModel.insertUser(values)
      res.status(200).json({ message: "Register successful" });

    } catch (error) {
      res.status(500).json({ message: "Error"+error });
      console.log('Err', error)

    }
  }

  //[GET]
  async getUser(req, res){
    const email_user=req.params.email_user;

    try {
      const result = await UserModel.getUser(email_user)

      res.json({status:"success", users: result})
    } catch (error) {
      res.json({status:"error"})     
    }

  }
  //[PUT]
  async updateTokenUser(req, res){
    const email_user=req.params.email_user;
    const token = req.body.token

    try {
      const result = await UserModel.updateTokenUser(token, email_user)
      if (result.affectedRows > 0) {
        console.log("Update User Token","Success")
        res.status(202).send({status:"success", message:"Success" });      
      }else{
        console.log("Update User Token","Failed")
        res.status(404).send({status:"error", message:"Failed" });      

      }
    } catch (error) {
      console.error("Error update token user",error)
    }
  }

}

module.exports = new userController();