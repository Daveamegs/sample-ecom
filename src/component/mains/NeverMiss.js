import React, { Component, Fragment } from "react";
import shirt from "../../images/tshirtsbanner.jpg";
import sneakers from "../../images/DDB_CP_GSF_Sneakers.jpg";
import xiaomi from "../../images/DDB_CP_GSF_XIAOMI.jpg";
import tv from "../../images/Desk-(15).jpg";

export default class NeverMiss extends Component {
  render() {
    return (
      <Fragment>
        <div className="container p-0 mt-3">
          <div className="d-flex py-3 bg-info px-1">
            <h5 className="mx-auto">Don't Miss These Goodies</h5>
          </div>
          <div className="bg-light d-flex p-2">
            <div className="me-1">
              <img src={shirt} className="w-100" alt="Item on Sale" />
            </div>

            <div className="ms-1">
              <img src={sneakers} className="w-100" alt="Item on Sale" />
            </div>
          </div>
        </div>

        <div className="container bg-light d-flex p-2 mt-3">
          <div className="me-1">
            <img src={shirt} className="w-100" alt="Item on Sale" />
          </div>

          <div className="ms-1">
            <img src={sneakers} className="w-100" alt="Item on Sale" />
          </div>
        </div>
      </Fragment>
    );
  }
}
