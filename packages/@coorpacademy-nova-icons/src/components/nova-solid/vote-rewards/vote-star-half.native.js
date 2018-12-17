import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M13.231 2.028a.997.997 0 0 0-1.125.525L9.382 8.001H4a1 1 0 0 0-.707 1.707l4.584 4.584-1.838 6.435a1 1 0 0 0 1.516 1.106l6-4c.278-.186.445-.498.445-.832v-14a.998.998 0 0 0-.769-.973z"
    />
  </Svg>
);

export default SvgComponent;
