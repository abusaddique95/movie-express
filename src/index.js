const express = require("express");
const path = require("path");
const mysql2 = require("mysql2");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const routes = require("./routes");
const connection = require("../db/config");

// set up handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

const init = async () => {
  try {
    const app = express();

    const PORT = process.env.PORT || 4000;

    // add middleware
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, "../public")));
    app.use(routes);

    // add listener
    app.listen(PORT, () => {
      console.log(`Sever running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: failed to start server | ${error.message}`);
  }
};

init();
