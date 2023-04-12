var express = require("express");
var app = express();

const cardRoutes = require("./routes/cards");

app.use("/cards", cardRoutes);

app.listen(8080, () => {
 console.log("Server running on port 8080");
});