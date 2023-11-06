import mongoose from "mongoose";

async function connectDataBase() {
    mongoose.connect(process.env.STRING_CONEXAO_DB);
    return mongoose.connection;
}

export default connectDataBase;