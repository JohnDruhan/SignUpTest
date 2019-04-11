var db = require("../models");

module.exports = function(app) {
  // Get all signups
  app.get("/api/signups", function(req, res) {
    db.Signup.findAll({}).then(function(dbSignups) {
      res.json(dbSignups);
    });
  });

  // Create a new signup
  app.post("/api/signups", function(req, res) {
    db.Signup.create(req.body).then(function(dbSignup) {
      res.json(dbSignup);
    });
  });

  // Delete an signup by id
  app.delete("/api/signups/:id", function(req, res) {
    db.Signup.destroy({ where: { id: req.params.id } }).then(function(dbSignup) {
      res.json(dbSignup);
    });
  });
};
