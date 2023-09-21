import { Link } from "react-router-dom";
import { logOut } from "../services/firebase";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogOut = function (e) {
    e.preventDefault();

    logOut();
    setIsLoggedIn(false);
  };

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
      }
    });
  }, [auth]);

  return (
    <>
      <Link to="/">
        <h1 className="text-xl font-bold">yelexGallery</h1>
        <p className="absolute top-7 left-6 lg:left-12 text-xs text-[#CFD4DE]">
          home of your images
        </p>
      </Link>

      <div className="flex items-center">
        {!isLoggedIn ? (
          <Link
            to="/login"
            className="text-gray-700 text- px-4 py-1 rounded-lg border"
          >
            Login
          </Link>
        ) : (
          <>
            {/* <p className="pr-4">Welcome back</p> */}
            <button
              className="text-gray-700 text- px-4 py-1 rounded-lg border"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </>
        )}

        {/* Dark Mode / Light Mode */}
        {/* <button>Dark Mode</button> */}
      </div>
    </>
  );
};

export default Header;
