import React, { Component } from "react";
import ReactDOM from "react-dom";
import './Book.scss';

// eslint-disable-next-line react/prefer-stateless-function
class Book extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="stack">
                    <div className="book"></div>
                    <div className="book"></div>
                    <div className="book"></div>
                    <div className="book"></div>
                    <div className="book"></div>
                </div>
            </div>
        );
    }
}

export default Book;