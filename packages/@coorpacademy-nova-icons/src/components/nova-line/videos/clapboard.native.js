import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M1 3v16c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2V3H1zm7.766 5l1.8-3h5.667l-1.8 3H8.766zM3 5h5.234l-1.8 3H3V5zm18.001 14H3v-9h18l.001 9zM16.766 8l1.8-3H21v3h-4.234z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
