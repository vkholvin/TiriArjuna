import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

type LinkName = "home" | "upload" | "settings";

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<LinkName | "">("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/home") setActiveLink("home");
    else if (path === "/upload") setActiveLink("upload");
    else if (path === "/settings") setActiveLink("settings");
  }, [location.pathname]);

  const linkClass = (link: LinkName): string =>
    `block py-2 px-3 mr-16 rounded md:p-0 ${
      activeLink === link
        ? "md:bg-transparent font-bold"
        : "text-gray-900 hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
    }`;

  return (
    <div className="bg-navbar w-full sticky top-0">
      <nav>
        <div className="flex items-center justify-between mx-auto p-5 pr-15">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="./assets/trijun.svg"
              className="w-56 h-10 justify-center"
              alt="Company Logo"
            />
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="pr-10 flex flex-col text-lg  p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/home"
                  className={linkClass("home")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/upload" className={linkClass("upload")}>
                  Upload
                </Link>
              </li>
              <li>
                <Link to="/settings" className={linkClass("settings")}>
                  Settings
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="justify-start block rounded md:p-0 text-gray-900 hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500"
                  type="button"
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-white rounded-lg p-6 w-96">
            <h2 className="text-lg font-semibold mb-4">
              Are you sure you want to Log Out?
            </h2>
            <div className="flex justify-end">
              <a href="/login">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg mr-2"
                  type="button"
                >
                  Yes, Log Out
                </button>
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg"
                type="button"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
