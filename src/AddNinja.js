import React, { Component } from "react";

class AddNinja extends Component {
  state = {
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //console.log(this.state);
    this.props.addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input id="name" type="text" onChange={this.handleChange} />
          <br />
          <label htmlFor="age">Age: </label>
          <input id="age" type="number" onChange={this.handleChange} />
          <br />
          <label htmlFor="belt">Belt: </label>
          <input id="belt" type="text" onChange={this.handleChange} />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default AddNinja;
