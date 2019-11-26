import React, { Component } from "react";
import ReactDOM from "react-dom";
import './HomeLetters.scss';

// eslint-disable-next-line react/prefer-stateless-function
class HomeLetters extends Component {
    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.BajarLetras();
    }

    BajarLetras() {
        var Utils = {
            extend: function (targetObj) {
                if (arguments.length > 1) {
                    var rest = Array.prototype.slice.call(arguments, 1);

                    for (var i = 0; i < rest.length; i++) {
                        for (var key in rest[i]) {
                            targetObj[key] = rest[i][key];
                        }
                    }
                }

                return targetObj;
            }
        };

        var defaults = {
            defaultText: "Alejandro Tejada",
            textCss: {
                fontSize: "72px",
                color: "#222"
            },
            speed: 100,
            fade: true
        };

        var Starfall = function (node, settings) {
            this.node = node;
            this.position = 0;
            this.settings = Utils.extend({}, defaults, settings);
            this.text = this.settings.defaultText;
            Utils.extend(this.node.style, this.settings.textCss);
            var testDimensions = this._getTestDimensions();
            this.node.textContent = "";
            Utils.extend(this.node.style, {
                width: Math.ceil(testDimensions[0].replace("px", "")) + "px",
                height: Math.ceil(testDimensions[1].replace("px", "")) + "px"
            });

            this.step();
        };

        Starfall.prototype.getLetterWrapElement = function (letter, withStyles = false) {
            var newElement = document.createElement("span");
            newElement.classList.add("starfall-ac__letter");
            newElement.textContent = letter;

            if (withStyles) {
                Utils.extend(newElement.style, this.settings.textCss);
            }

            return newElement;
        };

        Starfall.prototype.step = function () {
            if (this.hasLettersLeft()) {
                this.animateInLetter(this.text[this.position], function () {
                    this.position++;
                    this.step();
                }.bind(this));
            }
        };

        Starfall.prototype.animateInLetter = function (letter, callback) {
            var newElement = this.getLetterWrapElement(letter);
            this.node.appendChild(newElement);

            var listener = function () {
                newElement.removeEventListener("transitionend", listener);
                callback();
            };

            newElement.addEventListener("transitionend", listener);

            window.setTimeout(function () {
                newElement.classList.add("starfall-ac__letter--normal");
            }.bind(this), 0);
        };

        Starfall.prototype.hasLettersLeft = function () {
            return this.position < this.text.length;
        };

        Starfall.prototype._getTesterElement = function () {
            var testerElement = document.createElement("div");
            testerElement.classList.add("starfall-ac__tester");
            Utils.extend(testerElement.style, {
                position: "absolute",
                left: "-9999px",
                top: "-9999px"
            });

            return testerElement;
        };

        Starfall.prototype._removeTesterElements = function () {
            var bodyElement = document.getElementsByTagName("body")[0];
            var testerElements = document.getElementsByClassName("starfall-ac__tester");

            Array.prototype.forEach.call(testerElements, function (testerElement) {
                bodyElement.removeChild(testerElement);
            });
        };

        Starfall.prototype._getTestDimensions = function () {
            this._removeTesterElements();
            var testerElement = this._getTesterElement();
            this.text.split("").forEach(function (letter) {
                testerElement.appendChild(this.getLetterWrapElement(letter, true));
            }.bind(this));
            this._addElementToBody(testerElement);

            return [window.getComputedStyle(testerElement).width, window.getComputedStyle(testerElement).height];
        };

        Starfall.prototype._addElementToBody = function (element) {
            document.getElementsByTagName("body")[0].appendChild(element);
        };

        var test = document.getElementById("test");

        test.addEventListener("click", function () {
            new Starfall(document.getElementById("main"), {
            });
        });

        test.dispatchEvent(new Event("click"));
    
}


render() {

    return (
        <div>
            <div id="main" className="starfall-ac"></div>
            <div id="test"></div>
        </div>
    );
}
}

export default HomeLetters;