const fs = require("fs");

//create directories sync
const createDirectoriesSync = (...dirs) => {
  for (const dir of dirs) {
    if (!fs.existsSync(dir)) {
      // Create the directory if it does not exist
      fs.mkdirSync(dir);
    }
  }
};

module.exports = {
  createDirectoriesSync,
};
