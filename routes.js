"use strict";
let indexController = require("./app/controllers/Index");

module.exports = (app) => {
    app.get("/", indexController.index);
}