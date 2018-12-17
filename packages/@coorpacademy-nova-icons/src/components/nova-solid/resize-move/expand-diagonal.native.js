import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.293 6.292L12 10.585 6.414 4.999H9v-2H3v6h2V6.413l5.586 5.586-4.293 4.293 1.414 1.414L12 13.413l5.586 5.586H15v2h6v-6h-2v2.586l-5.586-5.586 4.293-4.293z"
    />
  </Svg>
);

export default SvgComponent;
