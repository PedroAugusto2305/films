import mongoose from "mongoose";

const serieSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.ObjectId},
    title: {type: String, required: true},
    director: {type: String, required: true},
    release: {type: Date},
    genre: {type: String}
}, {versionKey: false});

const serie = mongoose.model("series", serieSchema);

export { serie, serieSchema };