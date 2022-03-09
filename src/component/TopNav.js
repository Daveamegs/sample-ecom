import React, { Component } from "react";

export default class className extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-relative">
        <div className="container">
          <div className="position-absolute">
            <a className="nav-link" href="./">
              Sell on Jumia
            </a>
          </div>
          <div
            className="navbar-collapse flex-fill"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="./">
                  JUMIA
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  FOOD
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  PAY
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  PRIMO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./">
                  LOGISTICS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
