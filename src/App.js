import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "Ryu", age: 35, belt: "black", id: 1 },
      { name: "Crystal", age: 30, belt: "brown", id: 2 },
      { name: "Yoshi", age: 38, belt: "green", id: 3 },
    ],
  };

  addNinja = (ninja) => {
    //console.log(ninja);
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja]; // ... takes ninjas array from state, takes the element and adds it to the new array
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    //console.log(id);
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };

  componentDidMount() {
    console.log("Components Mounted");
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log("Components Updated");
    console.log(prevProps);
    console.log(prevStates);
  }

  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!!</p>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
