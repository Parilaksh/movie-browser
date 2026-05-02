import { createContext, useState, useEffect } from "react";

export const WatchlistContext = createContext();

export const WatchlistProvider = ({ children }) => {
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem("watchlist")) || []
  );

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);

  const addToWatchlist = (movie) => {
    if (watchlist.some((m) => m.imdbID === movie.imdbID)) return;
    setWatchlist((prev) => [...prev, movie]);
  };

  const removeFromWatchlist = (id) => {
    setWatchlist((prev) =>
      prev.filter((m) => m.imdbID !== id)
    );
  };

  return (
    <WatchlistContext.Provider value={{ watchlist, addToWatchlist, removeFromWatchlist }}>
      {children}
    </WatchlistContext.Provider>
  );
};