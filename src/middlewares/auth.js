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

module.exports = {
  authCheck,
  authByRole
}