import React, { Component } from "react";
import ReactDOM from "react-dom";
import Book from "./Book";
import Home from "./Home";
import HomeLetters from "./HomeLetters";



// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HomeLetters/>
        <Home/>
      </div>
    );
  }
}

export default App;