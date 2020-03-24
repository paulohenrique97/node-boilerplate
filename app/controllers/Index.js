"use strict";

module.exports = {
    index(req, res) {
        try{
            res.render("index");
        } catch (err) {
            console.log(err);
        }
    }
}