import React from "react";
import { PropagateLoader } from "react-spinners";

const Spinner = () => {
  return (
    <>
      <div className="container h-screen m-auto -mt-14 flex items-center justify-center">
        <PropagateLoader />
      </div>
    </>
  );
};

export default Spinner;
