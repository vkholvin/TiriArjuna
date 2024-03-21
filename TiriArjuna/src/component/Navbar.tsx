import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

type LinkName = 'home' | 'upload' | 'settings';

export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState<LinkName | ''>('');

  useEffect(() => {
    const path = location.pathname;
    if (path === '/home') setActiveLink('home');
    else if (path === '/upload') setActiveLink('upload');
    else if (path === '/settings') setActiveLink('settings');
  }, [location.pathname]);


  const linkClass = (link: LinkName): string =>
    `block py-2 px-3 mr-16 rounded md:p-0 ${
      activeLink === link
        ? 'md:bg-transparent font-bold'
        : 'text-gray-900 hover:bg-gray-100  md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:text-blue-500'
    }`;

  return (
    <div className="bg-navbar w-full sticky top-0">
      <nav>
        <div className="flex items-center justify-between mx-auto p-5 pr-15">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="./assets/trijun.svg" className="w-56 h-10 justify-center" alt="Company Logo" />
          </Link>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="flex flex-col text-lg  p-4 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
              <li>
                <Link
                  to="/home"
                  className={linkClass('home')}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/upload"
                  className={linkClass('upload')}
                >
                  Upload
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className={linkClass('settings')}
                >
                  Settings
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 mr-16 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
