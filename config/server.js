"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

let app = express();

try {
    app.set("view engine", "ejs");
    app.set("views", "./public/views");

    app.use(express.static("public"));
    app.use("/public/bootstrap", express.static("./node_modules/bootstrap/dist"));
    app.use("/public/jquery", express.static("./node_modules/jquery/dist"));
    app.use("/public/font-awesome", express.static("./node_modules/@fortawesome/fontawesome-free"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(session({
        secret: "REPLACE-WITH-COOL-TEXT",
        resave: false,
        saveUninitialized: true
    }));
} catch (err) {
    console.log(err);
}

module.exports = app;