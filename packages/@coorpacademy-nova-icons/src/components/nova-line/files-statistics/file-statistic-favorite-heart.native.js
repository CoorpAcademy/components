import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 10.006h2V11h-2zM8 15.006H7v-7H5v7H4v2h6v-5H8z" />
      <Path d="M2 2.002h10v4h4V11h2V4.588L13.414.003H2c-1.103 0-2 .897-2 2v18.001c0 1.103.897 2 2 2h8v-2H2V2.002z" />
      <Path d="M20 13.002c-.735 0-1.452.332-2 .845-.548-.513-1.265-.845-2-.845-2.393 0-4 1.607-4 4 0 3.467 4.924 6.52 5.485 6.858a1.01 1.01 0 0 0 1.03 0c.561-.339 5.485-3.391 5.485-6.858 0-2.393-1.607-4-4-4zm-2 8.81c-1.422-.965-4-3.072-4-4.81 0-.602.195-2 2-2 .449 0 1 .551 1 1a1.001 1.001 0 0 0 2 0c0-.449.551-1 1-1 1.805 0 2 1.398 2 2 0 1.738-2.578 3.845-4 4.81z" />
    </G>
  </Svg>
);

export default SvgComponent;
