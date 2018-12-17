import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.707 5.293L12 .585 7.293 5.293l1.414 1.414L11 4.414V9h2V4.414l2.293 2.293zM12 16.823l8.965-5.563A1.963 1.963 0 0 0 20 11H4c-.352 0-.678.1-.965.26L12 16.823z" />
      <Path d="M12.527 18.849a1 1 0 0 1-1.054.001l-9.47-5.877L2 13v9c0 1.102.897 2 2 2h16c1.103 0 2-.898 2-2v-9l-.003-.027-9.47 5.876z" />
    </G>
  </Svg>
);

export default SvgComponent;
