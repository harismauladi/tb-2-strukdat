import React from "react";

class AddNotes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      max: 50,
    };

    this.onBodyChange = this.onBodyChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onTitleChange = (event) => {
    this.setState(() => {
      return {
        title: event.target.value,
      };
    });

    if (this.state.title.length > this.state.max) {
      alert("Character Value is Overlimit!");
      this.setState(() => {
        return {
          title: "",
        };
      });
    }
  };

  onBodyChange = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.action(this.state);
  };

  render() {
    return (
      <div className="note-app__body">
        <div className="note-input">
          <h2 className="">Add Notes</h2>
          <p className="note-input__title__char-limit">
            Character Left : {this.state.max - this.state.title.length}
          </p>
          <input
            type="text"
            placeholder="Title"
            onChange={this.onTitleChange}
            required
            value={this.state.title}
          />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Insert Text Here"
            onChange={this.onBodyChange}
            required
            value={this.state.body}
          ></textarea>
          <button onClick={this.onSubmit}>Create</button>
        </div>
      </div>
    );
  }
}

export default AddNotes;
