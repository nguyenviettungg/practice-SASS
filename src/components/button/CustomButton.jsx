import React from "react";

import "./CustomButton.scss";

const CustomButton = ({ text }) => {
  return (
    <a href="/" className="btn btn-white btn-animated">
      {text}
    </a>
  );
};

export default CustomButton;
