import React from "react";

const Loading = ({ loading, error, children }) => {
  return (
    <div className="mt-5">
      {loading ? (
        <p className="text-white text-center fw-bold">Loading please wait...</p>
      ) : error ? (
        <p className="text-white text-center fw-bold">{error}</p>
      ) : (
        children
      )}
    </div>
  );
};

export default Loading;
