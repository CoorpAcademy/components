import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={7} cy={10.001} r={2} />
      <Path d="M7 13.001l-3 4h6v-4l-1 2z" />
      <Path d="M2 2h10v4h4v5.002h2V4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h8v-2H2V2z" />
      <Path d="M20 13c-.735 0-1.452.332-2 .846-.548-.514-1.265-.846-2-.846-2.393 0-4 1.607-4 4 0 3.467 4.924 6.521 5.485 6.858a1.002 1.002 0 0 0 1.03 0C19.076 23.521 24 20.467 24 17c0-2.393-1.607-4-4-4zm-2 8.811c-1.422-.965-4-3.072-4-4.811 0-.602.195-2 2-2 .449 0 1 .551 1 1a1 1 0 0 0 2 0c0-.449.551-1 1-1 1.805 0 2 1.398 2 2 0 1.738-2.578 3.846-4 4.811z" />
    </G>
  </Svg>
);

export default SvgComponent;
