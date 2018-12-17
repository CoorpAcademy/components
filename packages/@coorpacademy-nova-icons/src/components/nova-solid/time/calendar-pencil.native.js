import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 3h-2V1h-2v5h-1V3H8V1H6v5H5V3H3c-1.104 0-2 .898-2 2v15c0 1.103.896 2 2 2h18c1.104 0 2-.897 2-2V5c0-1.102-.896-2-2-2zM8.108 17.958l1.027-3.215 2.121 2.122-3.148 1.093zm8.452-6.397l-3.889 3.89-2.122-2.122 3.889-3.889a1.5 1.5 0 0 1 2.122 2.121z"
    />
  </Svg>
);

export default SvgComponent;
