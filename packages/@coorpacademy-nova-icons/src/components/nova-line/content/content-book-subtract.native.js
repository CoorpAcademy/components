import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M14 18.001H6v-16h10v15h2v-16a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h13v-2zm-10 0H2v-16h2v16zM16 19.001h6v2h-6z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
