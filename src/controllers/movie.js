const path = require("path");

const renderMoviePage = (req, res) => {
  try {
    return res.sendFile(path.join(__dirname, "../../public/index.html"));
  } catch (error) {
    console.log(`[error: failed to load homepage |" ${error.message}]`);
  }
};

module.exports = {
  renderMoviePage,
};
