import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="backdrop-blur-md bg-black/60 text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50">

  <h1 className="text-2xl font-bold text-blue-400 tracking-wide">
    🎬 Movie Hub
  </h1>

  <div className="space-x-8 text-lg">
    <Link to="/" className="hover:text-blue-400 transition">
      Home
    </Link>
    <Link to="/watchlist" className="hover:text-blue-400 transition">
      Watchlist
    </Link>
  </div>

</nav>
  );
}

export default Navbar;