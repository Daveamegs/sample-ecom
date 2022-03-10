import React, { Component } from "react";
import mfashion from "../../images/Mfashion_d.jpg";
import ghfashion from "../../images/gsf_phones_d.png";
import homeMakeOver from "../../images/hm_d.png";
import liveGif from "../../images/SBBlive.gif";

export default class Jumbotron extends Component {
  render() {
    return (
      <div className="container d-flex">
        <div className="bg-white p-4">
          <ul className="list-none">
            <li>
              <a>Supermarket</a>
            </li>
            <li>
              <a>Phones & Tablet</a>
            </li>
            <li>
              <a>Health & Beauty</a>
            </li>
            <li>
              <a>Home & Office</a>
            </li>
            <li>
              <a>Electronics</a>
            </li>
            <li>
              <a>Computing</a>
            </li>
            <li>
              <a>Fashion</a>
            </li>
            <li>
              <a>Sporting Goods</a>
            </li>
            <li>
              <a>Baby Products</a>
            </li>
            <li>
              <a>Gaming</a>
            </li>
            <li>
              <a>Automobile</a>
            </li>
            <li>
              <a>Other Categories</a>
            </li>
          </ul>
        </div>
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={mfashion} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={ghfashion} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={homeMakeOver} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div>
          <div>
            <ul className="bg-white">
              <li className="">
                <a href="./" className="nav-link text-dark">
                  <h5>HELP CENTRE</h5>
                  How can we help you?
                </a>
              </li>
              <li>
                <a>
                  EASY RETURNS <br />
                  Up to 15 Days
                </a>
              </li>
              <li>
                <a>
                  <h5>SELL ON JUMIA</h5>
                  <p>Make more money</p>
                </a>
              </li>
            </ul>
            <div>
              <img src={liveGif} alt="Ghana Shopping Gif" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
