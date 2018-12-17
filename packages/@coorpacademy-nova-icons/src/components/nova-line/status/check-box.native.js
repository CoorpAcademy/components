import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18.042 22h-14c-1.103 0-2-.897-2-2V8c0-1.102.897-2 2-2h10v2h-10v12h14v-5h2v5c0 1.103-.897 2-2 2z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M11.084 17.811l-4.926-4.927 1.767-1.768 3.074 3.074 9.118-10.031 1.849 1.682z"
    />
  </Svg>
);

export default SvgComponent;
