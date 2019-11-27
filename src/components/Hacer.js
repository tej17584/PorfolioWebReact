import React, { Component } from "react";
import ReactDOM from "react-dom";
import './MainCV.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Hacer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div>
                <div id="about" className="container-fluid">
                    <h2 className="text-uppercase dark-gray-font">Lo que sé Hacer</h2>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-md-offset-1 col-sm-12">
                                <p className="dark-gray-font text-justify">
                                   Las tecnologías que se manejan hoy en día son demasiadas, de hecho, es un milagro que hayan tantas. Es un poco ilusorio, o irrelevante pensar que un desarrollador las manejará todas. 
                                   Sin embargo, he tenido experiencia con algunas de ellas y las nombraré.
        </p>
                                <p className="dark-gray-font text-justify">
                                   Algunas han sido: React, Node.Js, HTML, CSS, SCSS, Javascript, Java, SQL, MongoDB, Ionic 4, Angular, Typescript, PostreSQL, MySQL, etc. 
        </p>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                <p className="dark-gray-font text-justify">
                                Estas tecnologías avanzan cada día y es imperativo usarlas, pero lo más importante es entender el porqué detrás de ellas.      </p>
                                <p className="dark-gray-font text-justify">
                                    
        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Hacer;