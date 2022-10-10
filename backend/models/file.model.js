module.exports = (sequelize, Sequelize) => {
    const File = sequelize.define("files", {
      name: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      }
    });
  
    return File;
  };