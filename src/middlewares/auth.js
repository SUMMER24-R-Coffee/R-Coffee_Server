const authCheck = async (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  next();
};
const authByRole = async (req, res, next) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  console.log("User 😬😬😬😬", req.session.user[0]);
  if (req.session.user.emp_role !== "manager") {
    req.flash("notificationErr", "You cannot access this function");
    return res.redirect("/home");
  }
  next();
};

const authClient = async (req, res, next) =>{
  if(!req.sessionUser.client){
    return res.status(401).json({ message: "Login to use this " });

  }
  next();

}

module.exports = {
  authCheck,
  authByRole,
  authClient
};
