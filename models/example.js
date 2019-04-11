module.exports = function(sequelize, DataTypes) {
  var Signup = sequelize.define("Signup", {
    // text: DataTypes.STRING,
    // description: DataTypes.TEXT

    name: DataTypes.STRING,
    email: DataTypes.TEXT
  });
  return Signup;
};
