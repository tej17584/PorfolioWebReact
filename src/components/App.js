import React, { Component } from "react";
import ReactDOM from "react-dom";
import Book from "./Book";
import Home from "./Home";
import HomeLetters from "./HomeLetters";
import './mainEstilos.scss';
import scrollToComponent from 'react-scroll-to-component';
import Boton from "./Boton";
import Hacer from "./Hacer";
import './MainCV.scss';
import SobreMi from "./SobreMi";
import Experiencia from "./Experiencia";



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
            <button className="btn-0" onClick={() => scrollToComponent(this.SombreMi, { offset: 0, align: 'middle', duration: 500})}>Sobre Mi</button>
              <Book />
            </div>
            <div>
            <button className="btn-0" onClick={() => scrollToComponent(this.Experiencia, { offset: 0, align: 'middle', duration: 500})}>Experiencia</button>
              <Book />
            </div>
            <div>
            <button className="btn-0" onClick={() => scrollToComponent(this.Hacer, { offset: 0, align: 'middle', duration: 500})}>Lo que sé hacer</button>
              <Book />
            </div>
            <div>
           
            </div>
          </div>
        </section>
        <section ref={(section) => { this.SombreMi = section; }} className="SobreMi">
          <SobreMi/>
        </section>
        <section ref={(section) => { this.Experiencia = section; }} className="Experiencia">
         <Experiencia/>
        </section>
        <section ref={(section) => { this.Hacer = section; }} className="Hacer">
        <Hacer/>
        </section>
      </div>
    );
  }
}

export default App;