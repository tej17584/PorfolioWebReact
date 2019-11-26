import React, { Component } from "react";
import ReactDOM from "react-dom";
import Book from "./Book";
import Home from "./Home";
import HomeLetters from "./HomeLetters";
import './mainEstilos.scss';
import scrollToComponent from 'react-scroll-to-component';



// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 500, ease: 'inExpo' });
  }



  render() {
    return (
      <div>

        <section className="Div1" ref={(section) => { this.Home = section; }}>
          <HomeLetters Mensaje="Alejandro Tejada" />
          <Home />
          <div className="Div2">
            <div>
              <h1>Sobre mi</h1>
              <Book/>
              </div>
              <div>
              <h1>Experiencia</h1>
              <Book/>
              </div>
              <div>
              <h1>Mis educación</h1>
              <Book/>
              </div>
              <div>
              <h1>Lo que sé hacer</h1>
              <Book/>
              </div>
          </div>
        </section>

      </div>
    );
  }
}

export default App;