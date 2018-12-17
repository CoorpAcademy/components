import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12.067 21.959L7.012 8.815l-2.319 6.184H0v-2h3.307l3.681-9.816 4.945 12.856 2.882-8.646 2.803 5.606H24v2h-7.618l-1.197-2.394z"
    />
  </Svg>
);

export default SvgComponent;
