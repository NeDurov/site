const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/123", (req, res) => {
	res.send("123");
});

app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`);
});
