import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .006h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 19.999H4v-5H2v5c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-5h-2v5zM2 6.999h2v2H2zM20 6.999h2v2h-2zM4 3.999h1v-2H4c-1.103 0-2 .896-2 2v1h2v-1zM20 1.999h-1v2h1v1h2v-1a2 2 0 0 0-2-2zM7 1.999h2v2H7zM15 1.999h2v2h-2zM11 1.999h2v2h-2z" />
      <Path d="M13.293 10.706l1.414-1.414L11 5.585 7.293 9.292l1.414 1.414L10 9.413v3.586c0 2.205 1.795 4 4 4v-2a2 2 0 0 1-2-2V9.413l1.293 1.293zM2 10.999h5v2H2zM15 10.999h7v2h-7z" />
    </G>
  </Svg>
);

export default SvgComponent;
