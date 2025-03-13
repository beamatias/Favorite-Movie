import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

import ImgLogo from "../../public/img/logoCine.png";

import "./NavBar.css";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/" className="logo-link">
          <img src={ImgLogo} alt="Logo" className="logo" />
          Filmes Favoritos
        </Link>
      </h2>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          className="search-input"
        />
        <button type="submit" className="search-button">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default Navbar;