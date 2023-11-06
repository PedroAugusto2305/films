import mongoose from "mongoose";
import { film } from "../models/Film.js";

class FilmController {
  // função que lista todos os filmes cadastrados pela API
  static async listMovies(req, res) {
    try {
      const filmList = await film.find({}); // procura todos os filmes
      res.status(200).json(filmList); // retorna a lista de filmes
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` }); // caso ocorra um erro, retorna a mensagem de falha na requisição
    }
  }
}

export default FilmController;
