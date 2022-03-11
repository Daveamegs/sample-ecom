import React, { Component } from "react";
import bag from "../../images/bag.jpg";

export default class FlashSales extends Component {
  render() {
    return (
      <div className="container p-0">
        <div className="d-flex py-3 text-white bg-danger px-1">
          <h5>Flash Sales</h5>
          <h5 className="mx-auto">Time Left: {"00h : 00m : 00s"}</h5>
          <h5>See All {">"}</h5>
        </div>
        <div className="bg-light p- d-flex">
          <div className="card w-25">
            <img src={bag} class="card-img-top" alt="Item on Sale" />
            <div className="card-body">
              <p className="card-text">Card title</p>
              <h5 className="card-title">Ghc78.77</h5>
              <h6 className="card-text">
                <s>Ghc105.65</s>
              </h6>
              <div className="progress">
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="card w-25">
            <img src={bag} class="card-img-top" alt="Item on Sale" />
            <div className="card-body">
              <p className="card-text">Card title</p>
              <h5 className="card-title">Ghc78.77</h5>
              <h6 className="card-text">
                <s>Ghc105.65</s>
              </h6>
              <div className="progress">
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="card w-25">
            <img src={bag} class="card-img-top" alt="Item on Sale" />
            <div className="card-body">
              <p className="card-text">Card title</p>
              <h5 className="card-title">Ghc78.77</h5>
              <h6 className="card-text">
                <s>Ghc105.65</s>
              </h6>
              <div className="progress">
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>

          <div className="card w-25">
            <img src={bag} class="card-img-top" alt="Item on Sale" />
            <div className="card-body">
              <p className="card-text">Card title</p>
              <h5 className="card-title">Ghc78.77</h5>
              <h6 className="card-text">
                <s>Ghc105.65</s>
              </h6>
              <div className="progress">
                <div
                  className="progress-bar w-50"
                  role="progressbar"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
