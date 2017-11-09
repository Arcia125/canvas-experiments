"use strict";

const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 9001;

app.use(express.static(path.resolve("src")));

app.get("/", (req, res) => {
  res.sendFile(path.resolve("index.html"));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

