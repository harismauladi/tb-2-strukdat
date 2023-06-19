import React from "react";
import showFormattedDate from "../utils/index";

function Card({
  title,
  time,
  body,
  id,
  onDelete,
  isArchived,
  onArchived,
  isSearch,
  backHandler,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h1 className="note-item__title">{title}</h1>
        <p className="note-item__date">
          {showFormattedDate.showFormattedDate(time)}
        </p>
        <p className="note-item__body">{body}</p>
      </div>
      {isSearch ? (
        <div className="note-item__action">
          <button onClick={backHandler} className="note-item__archive-button">
            Back
          </button>
        </div>
      ) : (
        <div className="note-item__action">
          <button
            className="note-item__delete-button"
            onClick={() => onDelete(id)}
          >
            Delete
          </button>
          <button
            className="note-item__archive-button"
            onClick={() => onArchived(id)}
          >
            {isArchived ? "Unarchived" : "Archive"}
          </button>
        </div>
      )}
    </div>
  );
}

export default Card;
