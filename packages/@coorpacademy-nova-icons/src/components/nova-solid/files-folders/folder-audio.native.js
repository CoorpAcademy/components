import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-5 8.5a1.5 1.5 0 1 1-1.5-1.5v-2.771l-3.5 1.14V16.5A1.5 1.5 0 1 1 8.5 15v-3.175a.75.75 0 0 1 .518-.713l5-1.63a.75.75 0 0 1 .982.713V15.5z"
    />
  </Svg>
);

export default SvgComponent;
