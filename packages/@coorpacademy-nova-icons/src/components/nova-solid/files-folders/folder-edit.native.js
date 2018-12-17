import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM7 18l1.027-3.215 2.121 2.122L7 18zm8.452-6.398l-3.889 3.89-2.122-2.121 3.89-3.889a1.5 1.5 0 1 1 2.121 2.12z"
    />
  </Svg>
);

export default SvgComponent;
