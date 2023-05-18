import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/icons/searchicon.svg";
import { ReactComponent as Mainlogo } from "../../assets/icons/EDYODA.svg";
import { ReactComponent as ExpandIcon } from "../../assets/icons/expandicon.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-box">
      <div className="container">
        <a href="#" className="navbar-brand">
          <Mainlogo className="logo-class" />
        </a>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link course-dropdown"
              data-bs-toggle="dropdown"
              id="dropdown-menu1"
              role="button"
            >
              Courses
              <ExpandIcon className="drop-expand" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-start drop"
              aria-labelledby="#dropdown-menu1"
            >
              <li>
                <a href="#" className="dropdown-item">
                  Course 1
                </a>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a
              href="#"
              className="nav-link course-dropdown"
              data-bs-toggle="dropdown"
              id="dropdown-menu"
              role="button"
            >
              Programs
              <ExpandIcon className="drop-expand" />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-start drop"
              aria-labelledby="#dropdown-menu"
            >
              <li>
                <a href="#" className="dropdown-item">
                  program 1
                </a>
              </li>
            </ul>
          </li>
        </ul>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#boostrapnav"
          aria-controls="boostrapnav"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid fa-bars bar-style"></i>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end navbar-menu-cls"
          id="boostrapnav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <button className="btn">
                <SearchIcon />
              </button>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link active nav-item-cls">
                Log in
              </a>
            </li>
            <li className="nav-item">
              <button
                href="#"
                className="nav-item-cls nav-btn-cls rounded-pill"
              >
                Join now
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
