import React, { Component } from "react";
import ReactDOM from "react-dom";
import './MainCV.scss';

// eslint-disable-next-line react/prefer-stateless-function
class SobreMi extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div id="about" className="container-fluid">
                    <h2 className="text-uppercase dark-gray-font">Sobre Mi</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1 col-sm-12">
                                <p className="dark-gray-font text-justify">
                                    Soy un lector empedernido, entendido de lo irónico y un miembro de lo inverosímil y dudoso. Me encantan los retos, lo extraño y hacer reir a las personas. 
        </p>
                                <p className="dark-gray-font text-justify">
                                    La mayoría de mi tiempo libre lo dedico a leer, pero también refuerzo mis habilidades de programación. La mayor parte de esa experiencia la obtuve en la universidad (llegaremos a eso).
        </p>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <p className="dark-gray-font text-justify">
                                Soy abierto a nuevas tecnologías. En realidad hay campos que son de mi mayor agrado: WEB es uno de ellos. De manera que amo Node.js          </p>
                                <p className="dark-gray-font text-justify">
                                    Me considero una persona resiliente, responsable y cumplidora. Puedo atrasarme un poco, pero siempre termino mis cosas.
        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SobreMi;