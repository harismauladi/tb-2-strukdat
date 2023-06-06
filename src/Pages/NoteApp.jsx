import React from "react";

import AddNotes from "../components/AddNotes";
import NotesList from "../components/NotesList";
import getInitialData from "../utils/index";
import Navbar from "../components/Navbar";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: getInitialData.getInitialData,
      search: "",
    };

    this.addData = this.addData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.archiveData = this.archiveData.bind(this);
    this.searchData = this.searchData.bind(this);
  }

  addData = ({ title, body }) => {
    this.setState((prevData) => {
      return {
        data: [
          ...prevData.data,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: new Date(),
          },
        ],
      };
    });
  };

  deleteData = (id) => {
    const data = this.state.data.filter((datas) => datas.id !== id);
    this.setState({ data });
  };

  archiveData = (id) => {
    const data = this.state.data.map((datas) =>
      datas.id === id ? { ...datas, archived: !datas.archived } : datas
    );
    this.setState({ data });
  };

  searchData = (e) => {
    this.setState(() => {
      return {
        search: e.target.value,
      };
    });
  };

  render() {
    const searchData = this.state.data.filter((datas) =>
      datas.title.toLowerCase().includes(this.state.search.toLowerCase())
    );

    return (
      <>
        <Navbar search={this.state.search} onSearch={this.searchData} />
        <AddNotes action={this.addData} />
        <NotesList
          type="active"
          data={this.state.data.filter(
            (datas) =>
              datas.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase()) &&
              datas.archived === false
          )}
          onDelete={this.deleteData}
          onArchived={this.archiveData}
        />
        <NotesList
          type="archive"
          data={this.state.data.filter(
            (datas) =>
              datas.title
                .toLowerCase()
                .includes(this.state.search.toLowerCase()) &&
              datas.archived === true
          )}
          onDelete={this.deleteData}
          onArchived={this.archiveData}
        />
      </>
    );
  }
}

export default NoteApp;
