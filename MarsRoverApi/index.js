import express from "express";
import bodyParser from "body-parser";

import roverRoutes from "./routes/rover.js";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.use("/rover", roverRoutes);
app.get("/", (req, res) => res.send("Welcome to the Rover API!"));
app.all("*", (req, res) =>res.send("You've tried reaching a route that doesn't exist."));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));