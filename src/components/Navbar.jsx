import React from "react";

function Navbar({ search, onSearch }) {
  return (
    <nav className="note-app__header">
      <h1>NotesApp</h1>
      <input
        type="text"
        placeholder="Search"
        value={search}
        className="note-search"
        onChange={(e) => onSearch(e)}
      />
    </nav>
  );
}

export default Navbar;
