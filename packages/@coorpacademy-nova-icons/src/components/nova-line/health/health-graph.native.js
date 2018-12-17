import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      d="M20 3h-2a1 1 0 0 0-1-1h-2.172C14.416.836 13.304 0 12 0S9.584.836 9.172 2H7a1 1 0 0 0-1 1H4c-1.104 0-2 .898-2 2v17c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V5c0-1.102-.896-2-2-2zM7 8h10v4h-2.535l-1.242 1.865-2-5L8.465 13H7V8zm0 7h2.535l1.242-1.863 2 5L15.535 14H17v5H7v-4zM8 4h2a1 1 0 0 0 1-1 1.001 1.001 0 0 1 2 0 1 1 0 0 0 1 1h2v2H8V4zm12 18H4V5h2v1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1V5h2v17z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
