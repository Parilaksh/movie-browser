import { useEffect, useState } from "react";
import { searchMovies } from "../services/api";
import { Link } from "react-router-dom";



const MovieRow = ({ title, movies }) => (
  <div className="mt-8">
    <h2 className="text-xl mb-3 font-semibold">{title}</h2>

    <div className="flex overflow-x-auto gap-4 pb-2">
      {movies.map((m) => (
        <Link to={`/movie/${m.imdbID}`} key={m.imdbID}>
          <div className="min-w-[150px] bg-gray-900/80 backdrop-blur rounded-xl p-2 
            hover:scale-110 hover:shadow-blue-500/40 shadow-md transition duration-300">
            <img
              src={m.Poster !== "N/A" ? m.Poster : ""}
             className="h-56 w-full object-cover rounded-lg hover:brightness-110 transition"
            />

            <p className="text-sm mt-2">{m.Title}</p>
          </div>
        </Link>
      ))}
    </div>
  </div>
);


function Home() {
  const [query, setQuery] = useState("");
  const [popular, setPopular] = useState([]);
  const [action, setAction] = useState([]);
  const [marvel, setMarvel] = useState([]);
  const [loading, setLoading] = useState(false);

  //  reusable fetch
  const fetchCategory = async (keyword, setter) => {
    try {
      setLoading(true);
      const data = await searchMovies(keyword);
      setter(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  // load multiple sections
  useEffect(() => {
    const loadAll = async () => {
      await fetchCategory("Avengers", setPopular);
      await fetchCategory("Action", setAction);
      await fetchCategory("Marvel", setMarvel);
    };

    loadAll();
  }, []);

  //  search
  const handleSearch = async (e) => {
    e.preventDefault();
    fetchCategory(query, setPopular);
  };

  return (
  <div className="min-h-screen px-4 py-6 text-white">

      {/* HERO */}
      <div className="text-center mb-6">
        <h1 className="text-4xl text-blue-400 font-bold">
          🎬 Movie Hub
        </h1>
        <p className="text-gray-400">
          Discover and save your favorite movies
        </p>
      </div>

      {/* SEARCH */}
      <form onSubmit={handleSearch}>
        <input
          className="w-full p-3 rounded-xl bg-gray-900/80 backdrop-blur border border-gray-700 
          focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          onChange={(e) => setQuery(e.target.value)}
          placeholder="🔍 Search movies..."
        />
      </form>

      <div className="text-center">
      <button
        onClick={() => fetchCategory("Avengers", setPopular)}
        className="bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2 mt-3 rounded-lg 
        hover:scale-105 hover:shadow-lg transition"
      >
        🔄 Refresh Movies
      </button>
    </div>

      {/* LOADING */}
      {loading && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-300">Fetching movies...</p>
        </div>
      )}

      {/*  SECTIONS */}
      <MovieRow title="🔥 Popular Movies" movies={popular} />
      <MovieRow title="💥 Action Movies" movies={action} />
      <MovieRow title="🎬 Marvel Movies" movies={marvel} />

    </div>
  );
}

export default Home;