import { Link, NavLink } from "react-router-dom";
import logo from "/src/assets/images/logow.png";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const NavBarWhite = () => {
    const { user, logOut } = useContext(AuthContext);
    const links =  <>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/destination">Destination</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </>
    return (
        <div>
        <div className="navbar bg-transparent px-32">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white font-semibold"
              >
                {links}
              </ul>
            </div>
            <Link to="/">
            <img className="w-24" src={logo} alt="" />
          </Link>
          </div>
          <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal text-white font-semibold px-1">{links}</ul>
            {user ? (
              <button
                onClick={logOut}
                className="btn bg-yellow-500 text-black hover:bg-green-400 border-none"
              >
                Log Out
              </button>
            ) : (
              <Link to="/login">
                <button className="btn bg-yellow-500 text-black hover:bg-green-400 btn-md border-none">
                  Login
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
};

export default NavBarWhite;