import React from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as GithubIcon } from "../../assets/github.svg";

const Navbar: React.FC = () => {
  return (
    <header className="bg-gray-900 sm:px-4 sm:py-3">
      <nav className="px-2 pt-2 pb-4 flex justify-between sm:p-0">
        <div className="flex">
          <NavLink
            className="nav-link"
            to="/"
            exact
          >
            Home
          </NavLink>
          <NavLink
            className="nav-link"
            to="/about"
          >
            About
          </NavLink>
        </div>
        <a
          href="https://github.com/mossen/github-repositories-search"
          className="nav-link"
        >
          <GithubIcon className="w-6"/>
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
