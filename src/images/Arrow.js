import React from "react";

const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={240}
      height={108}
      fill="none"
    >
      <mask
        id="a"
        width={240}
        height={108}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M0 .297h240V108H0V.297Z" />
      </mask>
      <g mask="url(#a)">
        <path
          fill="#E7E0FA"
          d="M188.958 106.646 238.12 57.49c1.76-1.76 1.76-4.51 0-6.271L188.958 2.057c-1.76-1.76-4.51-1.76-6.27 0-1.761 1.76-1.761 4.51 0 6.271l41.682 41.683H4.52c-2.416 0-4.4 1.979-4.4 4.395a4.416 4.416 0 0 0 4.4 4.401h219.85l-41.682 41.573c-.881.881-1.318 1.979-1.318 3.078 0 1.099.437 2.198 1.318 3.079a4.483 4.483 0 0 0 6.27.109Z"
        />
      </g>
    </svg>
  );
};

export default Arrow;
