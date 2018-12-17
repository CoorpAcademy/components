import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M21.339 11.683c-.373-.709-1-1.23-1.761-1.466-.394-.124-5.058-.714-5.469-.769l.822-4.814a2.96 2.96 0 0 0 .07-.634c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 .207.023.42.061.593l.83 4.854c-.396.053-5.085.649-5.467.768a2.976 2.976 0 0 0-1.765 1.469 2.976 2.976 0 0 0-.209 2.285 2.984 2.984 0 0 0 2.865 2.111c.52 0 1.031-.14 1.438-.37l3.397-1.729L8.237 21H4v2h16v-2h-4.235l-1.914-7.018 3.359 1.709c.438.244.924.389 1.473.389a2.988 2.988 0 0 0 2.865-2.11 2.976 2.976 0 0 0-.209-2.287zM12.001 3a1.002 1.002 0 0 1 .967 1.256L12.157 9h-.313l-.818-4.785A1.002 1.002 0 0 1 12.001 3zM5.812 13.945c-.589.333-1.277-.008-1.451-.569a.994.994 0 0 1 .069-.763c.156-.297.428-.493.842-.534l4.771-.634.093.299-4.324 2.201zM10.31 21l1.691-6.199L13.692 21H10.31zm9.329-7.624a1.024 1.024 0 0 1-1.247.66c-.119-.039-4.418-2.235-4.529-2.292l.093-.299c.125.017 4.905.642 5.026.68a.998.998 0 0 1 .657 1.251z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
