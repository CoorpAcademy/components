import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <Path
      fill="currentColor"
      d="M17 2H5c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.104 0 2-.897 2-2V4c0-1.103-.896-2-2-2zM6.001 6a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM12 14.816V16h-2v-1.184A2.988 2.988 0 0 1 8 12c0-1.656 3-4 3-4s3 2.344 3 4a2.987 2.987 0 0 1-2 2.816zM16 20a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"
    />
  </Svg>
);

export default SvgComponent;
