import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M17 6h-3V3h4V1H7.586L5.293 3.293l1.414 1.414L8.414 3H12v3H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-5 4a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1zm-3 2v-1a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0zm4 7a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm4-7a1 1 0 1 1-2 0v-1a1 1 0 1 1 2 0v1z"
    />
  </Svg>
);

export default SvgComponent;
