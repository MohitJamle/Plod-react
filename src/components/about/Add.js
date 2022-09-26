import React from "react";

const Add = ({ isAdd }) => {
  return (
    <>
      {isAdd ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={20}
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
          </g>
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width={20}
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M5 11h14v2H5z"></path>
          </g>
        </svg>
      )}
    </>
  );
};

export default Add;
