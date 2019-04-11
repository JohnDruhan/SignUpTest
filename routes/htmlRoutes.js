var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Signup.findAll({}).then(function(dbSignups) {
      res.render("index", {
        msg: "Welcome to MUT Chat",
        signups: dbSignups
      });
    });
  });

  // Load signup page and pass in an signup by id
  app.get("/signup/:id", function(req, res) {
    db.Signup.findOne({ where: { id: req.params.id } }).then(function(dbSignup) {
      res.render("signup", {
        signup: dbSignup
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
