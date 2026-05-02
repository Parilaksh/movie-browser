import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { getMovieDetails } from "../services/api";
import { WatchlistContext } from "../context/WatchlistContext";
import { toast } from "react-toastify";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { addToWatchlist } = useContext(WatchlistContext);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) {
  return (
    <div className="fixed inset-0 bg-black/70 flex flex-col justify-center items-center z-50">

      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      <p className="mt-4 text-gray-300">
        Loading movie details...
      </p>

    </div>
  );
}

  return (
  <div className="min-h-screen px-4 py-6 text-white">
    <div className="max-w-5xl w-full bg-gray-900/80 backdrop-blur rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-6">

      {/* POSTER */}
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        className="w-full md:w-1/3 rounded-lg object-cover"
      />

      {/* DETAILS */}
        <div className="flex-1">
          
          <span className="bg-yellow-500 text-black px-2 py-1 rounded text-sm">
            ⭐ {movie.imdbRating}
          </span>

        <h1 className="text-3xl font-bold mb-3">
          {movie.Title}
        </h1>

        <p className="text-gray-300 mb-4">
          {movie.Plot}
        </p>

        <p>📅 Year: {movie.Year}</p>
        <p>⭐ Rating: {movie.imdbRating}</p>
        <p>🎭 Genre: {movie.Genre}</p>

        {/* BUTTON */}
        <button
          onClick={() => {
            addToWatchlist(movie);
            toast.success("Added to Watchlist!");
          }}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 mt-4 rounded-lg 
          hover:scale-105 hover:shadow-lg transition"
        >
          Add to Watchlist
        </button>

      </div>

    </div>

  </div>
);
}

export default MovieDetails;