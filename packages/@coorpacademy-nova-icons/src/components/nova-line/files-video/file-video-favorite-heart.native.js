import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 17l7-4-7-4z" />
      <Path d="M2 2h10v4h4v5.006h2v-6.42L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M20 13c-.735 0-1.452.332-2 .846-.548-.514-1.265-.846-2-.846-2.393 0-4 1.607-4 4 0 3.467 4.924 6.521 5.485 6.858.159.096.337.142.515.142s.356-.046.515-.142C19.076 23.521 24 20.467 24 17c0-2.393-1.607-4-4-4zm-2 8.811c-1.422-.965-4-3.072-4-4.811 0-.602.195-2 2-2 .449 0 1 .551 1 1a1 1 0 0 0 2 0c0-.449.551-1 1-1 1.805 0 2 1.398 2 2 0 1.738-2.578 3.846-4 4.811z" />
    </G>
  </Svg>
);

export default SvgComponent;
