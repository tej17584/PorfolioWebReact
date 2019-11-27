import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Boton.scss';

import scrollToComponent from 'react-scroll-to-component';

// eslint-disable-next-line react/prefer-stateless-function
class Boton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="centerer">


                    {/*<a className="btn-0" href={() => scrollToComponent(this.props.NombreSection, { offset: 0, align: 'top', duration: 500})}>{this.props.nombreboton}</a>*/ }
        <button className="btn-0" onClick={() => scrollToComponent(this.props.NombreSection, { offset: 0, align: 'top', duration: 500})}>{this.props.nombreboton}</button>

                </div>
            </div>
        );
    }
}

export default Boton;