import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 6.001h-1.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 13.93 3h-3.86c-.669 0-1.293.335-1.664.89l-.812 1.22c-.371.557-.995.89-1.664.89H4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-1.999zM12 18a4.965 4.965 0 0 1-3.356-1.316L7 18v-4h5l-1.767 1.415A2.957 2.957 0 0 0 12 16a2.996 2.996 0 0 0 2.816-2h2.083A5.009 5.009 0 0 1 12 18zm5-6h-5l1.767-1.414A2.965 2.965 0 0 0 12 10a2.996 2.996 0 0 0-2.816 2H7.101A5.009 5.009 0 0 1 12 8c1.295 0 2.466.506 3.355 1.317L17 8v4z"
    />
  </Svg>
);

export default SvgComponent;
