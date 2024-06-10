const UserModel = require("../../models/user/user-model");

class userController {
  // [POST]
  async getLogin(req, res) {
    const email_user = req.body.email_user;
    const password = req.body.password;

    try {
      const result = await UserModel.getUser(email_user);

      if (result.length === 0) {
        res.status(404).json({ message: "User does not exist" });
      } else {
        if (password.compare(result[0].password)) {
          res.status(202).json({ message: "Login successful" });
        } else {
          res.status(401).json({ message: "Password is incorrect" });
        }
      }
    } catch (error) {
      console.log("Erorr login 🌶️🌶️🌶️🌶️", error);
      res.status(500).json({ message: "Error" + error });
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


}

module.exports = new userController();