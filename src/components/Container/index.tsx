import React from "react";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div className="min-h-screen bg-gray-200">
      <Navbar />
      {children}
    </div>
  );
};

export default Container;
