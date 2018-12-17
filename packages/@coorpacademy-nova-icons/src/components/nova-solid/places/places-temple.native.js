import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M20.789 21.106A2 2 0 0 0 19 20h-2l1.678-2.517a1 1 0 0 0 .062-1.003l-1.69-3.376A2.001 2.001 0 0 0 15.262 12H14v-1.908c.609-.641 1-1.559 1-2.592 0-1.081-.429-2.035-1.088-2.676L12.894 2.79a1 1 0 0 0-1.788-.001l-1.017 2.034C9.429 5.465 9 6.419 9 7.5c0 1.033.391 1.951 1 2.592V12H8.738c-.757 0-1.449.428-1.788 1.104L5.26 16.48a1 1 0 0 0 .062 1.003L7 20H5a2 2 0 0 0-1.6 3.2l.6.8h16l.6-.8a1.998 1.998 0 0 0 .189-2.094zM8 17l2-3v6l-2-3z"
    />
  </Svg>
);

export default SvgComponent;
