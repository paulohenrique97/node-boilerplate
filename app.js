"use strict";

require('dotenv').config();

const app = require("./config/server");
const routes = require("./routes");

try {
    app.listen(process.env.PORT, () => {
        routes(app);
        console.log("Escutando...\nPorta: %d.\nAmbiente: %s.", process.env.PORT, process.env.ENVIROMENT);
    });
} catch (err) {
    console.log(err);
}