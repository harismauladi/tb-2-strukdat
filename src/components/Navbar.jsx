import React from "react";
import { Link } from "react-router-dom";

function Navbar({ search, onSearch, onClickSearch, type = "notes" }) {
  return (
    <nav className="note-app__header">
      <h1>NotesApp</h1>
      <div className="link-wrapper">
        <p>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Notes App
          </Link>
        </p>
        <p>
          <Link
            to={"/bstdemo"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Demo BST
          </Link>
        </p>
      </div>
      {type === "notes" ? (
        <>
          <input
            type="text"
            placeholder="Search"
            value={search}
            className="note-search"
            onChange={(e) => onSearch(e)}
          />
          <button onClick={onClickSearch}>
            <p>Search</p>
          </button>
        </>
      ) : null}
    </nav>
  );
}

export default Navbar;
