module.exports = function(sequelize, DataTypes) {
  var Signup = sequelize.define("Signup", {

    name: DataTypes.STRING,
    email: DataTypes.TEXT
  });
  return Signup;
};
