import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm3 13H9v-2H7l4-3.2V8H9V6h2V4h2v2h2v2h-2v1.8l4 3.2h-2v2z"
    />
  </Svg>
);

export default SvgComponent;
