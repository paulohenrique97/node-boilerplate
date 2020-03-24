"use strict";
let indexController = require("./app/controllers/Index");

module.exports = (app) => {
    try {
        app.get("/", indexController.index);
    } catch (err) {
        console.log(err);
    }
}