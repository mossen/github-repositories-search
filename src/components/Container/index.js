import React from "react";
import PropTypes from "prop-types";
import Navbar from "../Navbar";

const Container = (props) => {
  const { children } = props;
  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};

export default Container;
