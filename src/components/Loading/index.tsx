import React from "react";
import "./loading.scss";
import { ClipLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loading">
      <ClipLoader color="#35BBE3" size={100} />
    </div>
  );
};

export default Loading;
