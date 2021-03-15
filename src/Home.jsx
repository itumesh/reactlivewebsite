import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
import img1 from "./images/img1.jpg";

const Home = () => {
  return (
    <>
      <Common
        name="Grow Your Business With  "
        imgsrc={img1}
        visit="/service"
        btName="Get Started"
      />
    </>
  );
};

export default Home;
