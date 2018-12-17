import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 11c0-1 1-1 1-1h5.315c.435-.91.685-1.925.685-3 0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.965.458 1.996 1.263 2.97 2.647l-.817.576C7.678 4.454 6.393 4 5 4 2.243 4 0 6.243 0 9s2.243 5 5 5h8v-3z" />
      <Path d="M23.707 15.293l-3-3A1 1 0 0 0 20 12h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a.997.997 0 0 0-.293-.707zM20 16v-3l3 3h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
