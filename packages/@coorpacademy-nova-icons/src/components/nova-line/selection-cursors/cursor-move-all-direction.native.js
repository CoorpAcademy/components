import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 7.587l-1.414 1.414 2 2H13V5.416l2 2 1.414-1.415L12 1.587 7.586 6.001 9 7.416l2-2v5.585H5.414l2-2L6 7.587l-4.414 4.414L6 16.416l1.414-1.415-2-2H11v5.586l-2-2-1.414 1.414L12 22.416l4.414-4.415L15 16.587l-2 2v-5.586h5.586l-2 2L18 16.416l4.414-4.415z"
    />
  </Svg>
);

export default SvgComponent;
