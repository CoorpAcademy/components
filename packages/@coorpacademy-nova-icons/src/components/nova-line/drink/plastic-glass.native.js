import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 9h-1.086c-.375-2.253-2.039-4.325-5.223-4.864l.189-1.886 2.878.72.484-1.941-4-1a.998.998 0 0 0-1.237.87l-.312 3.112C7.635 4.124 5.539 6.41 5.096 9H4v2h1.074l.929 12.078A1 1 0 0 0 7 24h10a1 1 0 0 0 .997-.922L18.924 11H20V9zm-3.104 0h-3.691l.285-2.854c1.856.346 3.065 1.352 3.406 2.854zm-5.404-2.969L11.195 9H7.121c.416-1.768 1.981-2.833 4.371-2.969zM16.074 22H7.926l-.849-11h3.918l-.99 9.9 1.99.199 1.01-10.1h3.915L16.074 22z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
