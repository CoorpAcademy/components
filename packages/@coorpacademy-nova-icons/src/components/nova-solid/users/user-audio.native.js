import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.562 11.019C19.547 6.586 18.499 2 12.001 2c-4.411 0-8 3.589-8 8v12h12v-3h1c1.103 0 2-.897 2-2v-3h2.281s-.59-2.408-.72-2.981zm-5.561 1.905h-.013c.004.044.013.086.013.131a1.5 1.5 0 1 1-1.5-1.5V8.783l-3.5 1.141v4h-.013c.004.044.013.086.013.131a1.5 1.5 0 1 1-1.5-1.5V9.38a.75.75 0 0 1 .518-.713l5-1.63a.745.745 0 0 1 .672.107c.195.14.31.366.31.606v5.174z"
    />
  </Svg>
);

export default SvgComponent;
