import express from "express";
import connectDataBase from "./config/dbConnect.js";

const connection = await connectDataBase();

connection.once("open", () => {
    console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!!");
});

export default app;