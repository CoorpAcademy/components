import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M15 15H7c-2.757 0-5-2.243-5-5s2.243-5 5-5c.533 0 1.061.086 1.563.253A6.962 6.962 0 0 1 15 1c3.859 0 7 3.141 7 7 0 3.86-3.141 7-7 7zM7 7c-1.654 0-3 1.346-3 3s1.346 3 3 3h8c2.757 0 5-2.243 5-5s-2.243-5-5-5a4.973 4.973 0 0 0-4.865 3.867 1 1 0 0 1-1.518.613A2.977 2.977 0 0 0 7 7zM20 17H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-1 4h-6v-2h6v2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
