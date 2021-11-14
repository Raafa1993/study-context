import React from "react";

export default function IconAddImage({ size = 24, color = "#3b3b3b" }) {
  return (
    <svg
      id="imagem"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 40 40"
    >
      <g id="bg" fill="#eef0f4">
        <path
          d="M 30 39 L 10 39 C 5.037380218505859 39 1 34.96261978149414 1 30 L 1 10 C 1 5.037380218505859 5.037380218505859 1 10 1 L 30 1 C 34.96261978149414 1 39 5.037380218505859 39 10 L 39 30 C 39 34.96261978149414 34.96261978149414 39 30 39 Z"
          stroke="none"
        />
        <path
          d="M 10 2 C 5.588790893554688 2 2 5.588790893554688 2 10 L 2 30 C 2 34.41120910644531 5.588790893554688 38 10 38 L 30 38 C 34.41120910644531 38 38 34.41120910644531 38 30 L 38 10 C 38 5.588790893554688 34.41120910644531 2 30 2 L 10 2 M 10 0 L 30 0 C 35.52285003662109 0 40 4.477149963378906 40 10 L 40 30 C 40 35.52285003662109 35.52285003662109 40 30 40 L 10 40 C 4.477149963378906 40 0 35.52285003662109 0 30 L 0 10 C 0 4.477149963378906 4.477149963378906 0 10 0 Z"
          stroke="none"
          fill="#859ec5"
        />
      </g>
      <g id="camera" transform="translate(7 9)">
        <g
          id="Retângulo_54"
          data-name="Retângulo 54"
          transform="translate(0 2)"
          fill="#fff"
          stroke="#859ec5"
          strokeWidth="2"
        >
          <rect width="26" height="18" rx="3" stroke="none" />
          <rect x="1" y="1" width="24" height="16" rx="2" fill="none" />
        </g>
        <path
          id="Caminho_55"
          data-name="Caminho 55"
          d="M52.25,106.946h18v-3.793l-5.226-3.57-6.968,5.28-3-2.008-2.807,2.008Z"
          transform="translate(-48.25 -90.583)"
          fill="#859ec5"
        />
        <circle
          id="Elipse_21"
          data-name="Elipse 21"
          cx="1.5"
          cy="1.5"
          r="1.5"
          transform="translate(5 7)"
          fill="#859ec5"
        />
      </g>
    </svg>
  );
}
