import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16 4.221v2.85l-1.756-1.757c-.35.259-.679.529-.968.818-2.754 2.754-2.392 4.954-1.377 5.969L9 15v2l4.21-4.21c1.163.238 2.781-.189 4.659-2.067C20.623 7.968 22 2 22 2s-3.203.743-6 2.221z"
    />
    <Path
      fill="currentColor"
      d="M13.981 14.847L8.707 20.12a.997.997 0 0 1-1.09.218A1.002 1.002 0 0 1 7 19.414v-4.828a1 1 0 0 1 .293-.707l2.109-2.108c-.402-1.169-.31-2.462.213-3.772H3c-1.103 0-2 .897-2 2v11c0 1.102.897 2 2 2h11c1.102 0 2-.898 2-2v-6.601c-.773.307-1.461.431-2.019.449z"
    />
  </Svg>
);

export default SvgComponent;
