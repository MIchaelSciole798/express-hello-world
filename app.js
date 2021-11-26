import express from "express";
const app = express();
import caramels from "./caramels.json";
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.send(caramels));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
