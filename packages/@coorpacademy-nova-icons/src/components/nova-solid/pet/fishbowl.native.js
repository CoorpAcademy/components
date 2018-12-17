import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M19.141 4H4.858C3.099 5.958 2 8.144 2 11c0 5.514 4.486 10 10 10s10-4.486 10-10c0-2.871-1.112-5.057-2.859-7zM14 17c-1.127 0-2.573-.635-3.619-1.19L8 17v-4l2.381 1.19C11.427 13.636 12.873 13 14 13c2 0 3 2 3 2s-1 2-3 2zM4 11c0-1.82.624-3.58 1.767-5h12.466A7.976 7.976 0 0 1 20 11H4z"
    />
  </Svg>
);

export default SvgComponent;
