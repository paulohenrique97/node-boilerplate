"use strict";

const app = require("./server/server");
const port = 3000;
const routes = require("./routes");

app.listen(port, () => {
    routes(app);
});