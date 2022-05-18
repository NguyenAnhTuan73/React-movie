import React, { useRef, useEffect } from "react";
import "./header.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/pngwing.com.png";

const headerNav = [
  { display: "Home", path: "/react-movie/" },
  { display: "Movies", path: "/react-movie/movie" },
  { display: "Tv Series", path: "/react-movie/tv" },
];
const Header = () => {
  const { pathname } = useLocation();

  const headerRef = useRef(null);

  const active = headerNav.findIndex((e) => e.path === pathname);
  console.log("pathname:", pathname, "active:", active);
  useEffect(() => {
    const shrinkHeader = () => {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    };
    window.addEventListener("scroll", shrinkHeader);
    return () => {
      window.removeEventListener("scroll", shrinkHeader);
    };
  }, []);

  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/react-movie/">QBMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? "active" : ""}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
