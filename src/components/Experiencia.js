import React, { Component } from "react";
import ReactDOM from "react-dom";
import './MainCV.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Experiencia extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div id="about" className="container-fluid">
                    <h2 className="text-uppercase dark-gray-font">Experiencia</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1 col-sm-12">
                                <p className="dark-gray-font text-justify">
                                    He trabajado en algunos lugares interesante a través de estos años:
        </p>
                                <p className="dark-gray-font text-justify">
                                    En cervecería centroamericana, ejerciendo un cargo de ayuda en soporte técnico. Aprendí ahi a socializar, a tomar en cuenta necesidades de varias personas y a ser versátil en cuanto a como usar los recursos disponibles. Fueron unos meses de prácticas supervisadas intensos.
        </p>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <p className="dark-gray-font text-justify">
                                   Mi experiencia universitaria (2017-continúa). En ella he aprendido a relacionarme con personas que quizás no me agradan o quizás jamás lo harán.          </p>
                                <p className="dark-gray-font text-justify">
                                    Recientemente en un emprendimiento como Software Developer. He aprendido a ser multitasking (Full Stack dicen los bajos barrios).
        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experiencia;