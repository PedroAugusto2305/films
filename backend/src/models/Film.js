import mongoose from "mongoose";

const filmSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    title: {type: String, required: true},
    director: {type: String, required: true},
    release: {type: Date},
    genre: {type: String}
}, {versionKey: false});

const film = mongoose.model("films", filmSchema);

export { film, filmSchema };
