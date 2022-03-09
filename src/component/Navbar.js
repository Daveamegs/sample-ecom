import React, { Component, Fragment } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light">
        <div className="container d-flex">
          <a className="navbar-brand flex-fill" href="./">
            Navbar
          </a>

          {/* Toggle Button */}
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Search Button */}
          <form class="d-flex flex-fill">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>

          {/* Nav List Anchor */}
          <div
            class="collapse navbar-collapse flex-fill"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">
                  Items
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">
                  Items
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="./">
                  Items
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
