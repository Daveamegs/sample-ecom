import React, { Component } from "react";

export default class NavCards extends Component {
  render() {
    return (
      <div className="container p-0">
        <a
          href="./"
          class="btn btn-light w-auto my-3"
          role="button"
          data-bs-toggle="button"
        >
          Free Delivery
        </a>
        <a
          href="./"
          class="btn btn-light w-auto mx-3"
          role="button"
          data-bs-toggle="button"
        >
          Shopping Festival
        </a>
        <a
          href="./"
          class="btn btn-light w-auto me-3 border-box"
          role="button"
          data-bs-toggle="button"
        >
          Official Stores
        </a>
        <a
          href="./"
          class="btn btn-light w-auto"
          role="button"
          data-bs-toggle="button"
        >
          Jumia Global
        </a>
      </div>
    );
  }
}
