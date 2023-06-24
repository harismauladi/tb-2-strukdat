import React from "react";
import BST from "../utils/bstimplemet";
import AddNotes from "../components/AddNotes";
import NotesList from "../components/NotesList";
import getInitialData from "../utils/index";
import Navbar from "../components/Navbar";
import Card from "../Elments/Card";
import Footer from "../components/Footer";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.bst = new BST();
    this.state = {
      data: getInitialData.getInitialData,
      search: "",
      searchData: null,
    };

    this.addData = this.addData.bind(this);
    this.deleteData = this.deleteData.bind(this);
    this.archiveData = this.archiveData.bind(this);
    this.inputSearchData = this.inputSearchData.bind(this);
    this.searchDataByTitle = this.searchDataByTitle.bind(this);
    this.backHandler = this.backHandler.bind(this);
  }

  addData = ({ title, body }) => {
    this.setState((prevData) => {
      return {
        data: [...prevData.data, this.bst.addData({ title, body })],
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

  inputSearchData = (e) => {
    this.setState(() => {
      return {
        search: e.target.value,
      };
    });
  };

  searchDataByTitle = () => {
    const { search } = this.state;
    const data = this.bst.searchDataByTitle(search);
    this.setState({
      searchData: data,
    });
  };

  backHandler = () => {
    this.setState({
      searchData: null,
    });
  };

  render() {
    return (
      <>
        <Navbar
          search={this.state.search}
          onSearch={this.inputSearchData}
          onClickSearch={this.searchDataByTitle}
        />
        <AddNotes action={this.addData} />
        {this.state.searchData !== null ? (
          this.state.searchData.archived === false ? (
            <section className="note-app__body">
              <h2>Active Notes</h2>
              <div className="notes-list">
                <Card
                  id={this.state.searchData.id}
                  title={this.state.searchData.title}
                  body={this.state.searchData.body}
                  time={this.state.searchData?.createdAt}
                  onDelete={this.deleteData}
                  isArchived={this.state.searchData.archived}
                  onArchived={this.archiveData}
                  isSearch={true}
                  backHandler={this.backHandler}
                />
              </div>
            </section>
          ) : (
            <section className="note-app__body">
              <h2>Archived Notes</h2>
              <div className="notes-list">
                <Card
                  id={this.state.searchData.id}
                  title={this.state.searchData.title}
                  body={this.state.searchData.body}
                  time={this.state.searchData?.createdAt}
                  onDelete={this.deleteData}
                  isArchived={this.state.searchData.archived}
                  onArchived={this.archiveData}
                  isSearch={true}
                  backHandler={this.backHandler}
                />
              </div>
            </section>
          )
        ) : (
          <>
            {" "}
            <NotesList
              type="active"
              data={this.state.data.filter((datas) => datas.archived === false)}
              onDelete={this.deleteData}
              onArchived={this.archiveData}
              isSearch={false}
            />
            <NotesList
              type="archive"
              data={this.state.data.filter((datas) => datas.archived === true)}
              onDelete={this.deleteData}
              onArchived={this.archiveData}
              isSearch={false}
            />{" "}
          </>
        )}

        <Footer />
      </>
    );
  }
}

export default NoteApp;
