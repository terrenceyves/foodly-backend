import express from "express";
import "reflect-metadata";

const app = express();
const port = 3200;
app.get("/", (req, res) => {
  res.send("Bienvenue sur le backend API");
});
app.listen(port, () => {
  return console.log(`serveris listening on ${port}`);
});
