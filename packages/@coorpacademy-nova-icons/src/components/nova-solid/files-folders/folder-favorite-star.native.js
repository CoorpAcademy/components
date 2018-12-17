import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-4.5 12L12 16.502 8.5 19l1.5-4.002L7 13h3.5l1.507-4 1.493 4H17l-3 1.998L15.5 19z"
    />
  </Svg>
);

export default SvgComponent;
