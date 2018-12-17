import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18 11.415l-3.917-3.917-4 5L7 9.415 5.414 11H2v9c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V9h-1.586L18 11.415zM7 20H5v-3h2v3zm4 0H9v-5h2v5zm4.001 0h-2v-3h2v3zm4 0h-2v-5h2v5z" />
      <Path d="M20 2H4c-1.103 0-2 .898-2 2v5h2.586L7 6.586l2.917 2.917 4-5L18 8.586 19.586 7H22V4c0-1.102-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
