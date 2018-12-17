import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20 3h-2a1 1 0 0 0-1-1h-2.172C14.416.836 13.304 0 12 0S9.584.836 9.172 2H7a1 1 0 0 0-1 1H4c-1.104 0-2 .898-2 2v17c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V5c0-1.102-.896-2-2-2zM7 8h10v11H7V8zm1-4h2a1 1 0 0 0 1-1 1.001 1.001 0 0 1 2 0 1 1 0 0 0 1 1h2v2H8V4zm12 18H4V5h2v1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1V5h2v17z" />
      <Path d="M13 11h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
