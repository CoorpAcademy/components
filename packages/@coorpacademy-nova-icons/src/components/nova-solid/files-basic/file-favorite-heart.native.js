import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zm-4.478 18S8 16.634 8 14.127c0-2.381 3.181-3.413 4.064-.288.882-3.125 3.936-2.093 3.936.288 0 2.703-3.726 4.676-4.064 4.873zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
