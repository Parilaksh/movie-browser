import { useContext } from "react";
import { WatchlistContext } from "../context/WatchlistContext";
import { Link } from "react-router-dom";

function Watchlist() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div className="min-h-screen px-4 py-6 text-white">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        ⭐ My Watchlist
      </h1>

      {/* EMPTY STATE */}
      {watchlist.length === 0 ? (
          <p className="text-center text-gray-400 text-lg mt-10">
            🎬 Your watchlist is empty. Start adding movies!
          </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {watchlist.map((m) => (
            <div
              key={m.imdbID}
                className="bg-gray-900/80 backdrop-blur rounded-xl overflow-hidden shadow-md 
                hover:scale-105 hover:shadow-blue-500/40 transition duration-300 p-3">            

              {/* POSTER */}
              <img
                src={m.Poster !== "N/A" ? m.Poster : ""}
                className="w-full h-60 object-cover rounded"
              />

              {/* TITLE */}
              <h2 className="mt-2 font-semibold text-sm">
                {m.Title}
              </h2>

              {/* BUTTONS */}
              <div className="flex justify-between mt-2">

                <Link
                  to={`/movie/${m.imdbID}`}
                  className="text-blue-400 text-sm"
                >
                  View
                </Link>

                <button
                    onClick={() => removeFromWatchlist(m.imdbID)}
                    className="bg-gradient-to-r from-red-500 to-pink-600 px-3 py-1 rounded-lg text-sm 
                    hover:scale-105 hover:shadow-lg transition"
                  >
                    Remove
                </button>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default Watchlist;