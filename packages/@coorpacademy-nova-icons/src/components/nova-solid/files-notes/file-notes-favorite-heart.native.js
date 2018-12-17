import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-6.064 16S8 15.634 8 13.127c0-2.381 3.181-3.414 4.064-.288.882-3.126 3.936-2.093 3.936.288 0 2.703-3.726 4.676-4.064 4.873z"
    />
  </Svg>
);

export default SvgComponent;
