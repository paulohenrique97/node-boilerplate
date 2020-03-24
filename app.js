"use strict";

const app = require("./config/server");
const routes = require("./routes");
const fs = require("fs");

try {
    fs.readFile("./config/config.json", (err, data) => {
        if (err) {
            console.log(err);
        } else {
            let config = JSON.parse(data);
            app.listen(config.port, () => {
                routes(app);
            })
        }
    });
} catch (err) {
    console.log(err);
}