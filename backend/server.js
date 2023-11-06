import "dotenv/config";
import app from "./src/app.js";

// TODO: adicionar porta no .env
const PORT = 3000;

app.listen(PORT, () => {
    console.log("Servidor escutando!");
});