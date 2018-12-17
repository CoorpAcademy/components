import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.093 8.739a4.825 4.825 0 0 0-1.415-3.414 4.823 4.823 0 0 0-3.413-1.415l-2.243.001-5.582 6.994 5.657 5.657 6.995-5.58.001-2.243zM2 17.346l5.732-5.733 1.415 1.415-5.733 5.732zM4.12 19.469l5.735-5.734 1.414 1.414-5.734 5.734zM7.66 23.005l-1.415-1.412 5.727-5.737 1.415 1.413zM22.506 13.811l-.707-.707a.998.998 0 1 0-1.413 1.413l.707.707a.999.999 0 1 0 1.413-1.413zM18.971 15.932a.999.999 0 1 0-1.414 1.414l.707.708a1 1 0 1 0 1.414-1.415l-.707-.707zM10.486 4.618a.997.997 0 0 0 1.414 0 .998.998 0 0 0-.001-1.413l-.708-.707A.999.999 0 1 0 9.779 3.91l.707.708zM7.658 7.447a.999.999 0 1 0 1.414-1.414l-.708-.708a1.002 1.002 0 0 0-1.415 0 1.004 1.004 0 0 0 0 1.415l.709.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
