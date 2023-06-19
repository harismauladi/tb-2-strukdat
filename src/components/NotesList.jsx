import React from "react";
import Card from "../Elments/Card";

function NotesList({ type, data, onDelete, onArchived, isSearch = false }) {
  return (
    <>
      {data?.length !== 0 ? (
        <section className="note-app__body">
          <h2>{type === "archive" ? "Archived Notes" : "Active Notes"}</h2>
          <div className="notes-list">
            {data?.map((item) => (
              <Card
                type={type}
                key={item?.id}
                id={item.id}
                title={item.title}
                body={item.body}
                time={item?.createdAt}
                onDelete={onDelete}
                isArchived={item.archived}
                onArchived={onArchived}
                isSearch={isSearch}
              />
            ))}
          </div>
        </section>
      ) : (
        <div className="note-app__body">
          <h2>{type === "archive" ? "Archived Notes" : "Active Notes"}</h2>
          <p className="notes-list__empty-message">No Data Available</p>
        </div>
      )}
    </>
  );
}

export default NotesList;
