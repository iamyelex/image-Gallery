import { Link } from "react-router-dom";
import { logOut } from "../services/firebase";

const Header = () => {
  const handleLogOut = function (e) {
    e.preventDefault();

    logOut();
  };

  return (
    <>
      <Link to="/">
        <h1 className="text-xl font-bold">yelexGallery</h1>
        <p className="absolute top-7 left-6 lg:left-12 text-xs text-[#CFD4DE]">
          home of your images
        </p>
      </Link>

      <div className="flex items-center">
        <Link
          to="/login"
          className="text-gray-700 text- px-4 py-1 rounded-lg border"
        >
          Login
        </Link>

        <p>Welcome back</p>
        <button
          className="text-gray-700 text- px-4 py-1 rounded-lg border"
          onClick={handleLogOut}
        >
          Log Out
        </button>

        {/* Dark Mode / Light Mode */}
        <button>Dark Mode</button>
      </div>
    </>
  );
};

export default Header;
