const moviesService = require("../services/moviesService");

module.exports = {
  getAllMovies: async (req, res) => {
    const Movies = await moviesService.getMovies();
    console.log(Movies);
    res.status(200).send(Movies);
  },

  createMovies: (req, res) => {
    const { title, year, director, duration, genre, rate, poster } = movie;
    try {
      repository.createMovie(movie);
      res.status(201).json({
        message: "Pelicula agregada correctamente",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        error: "Error al agregar pelicula",
      });
    }
  },
};
