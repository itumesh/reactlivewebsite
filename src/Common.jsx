import React from "react";
import { NavLink } from "react-router-dom";
import img1 from "./images/img1.jpg";

const Common = (props) => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column d-flex align-items-center">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> Umesh Choudhary</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of talented developer makeing websites
                  </h2>
                  <div className="mt-3">
                    <NavLink className="btn-get-started " to={props.visit}>
                      {props.btName}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
