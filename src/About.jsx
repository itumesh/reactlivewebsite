import React from "react";

import Common from "./Common";
import img1 from "./images/about1.jpg";

const About = () => {
  return (
    <>
      <Common
        name="Welcome to About Page"
        imgsrc={img1}
        visit="/contact"
        btName="Contact Now"
      />
    </>
  );
};

export default About;
