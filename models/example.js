module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    // text: DataTypes.STRING,
    // description: DataTypes.TEXT

    name: DataTypes.STRING,
    email: DataTypes.TEXT
  });
  return Example;
};
