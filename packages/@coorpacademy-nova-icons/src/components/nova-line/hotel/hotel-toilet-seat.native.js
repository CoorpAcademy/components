import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 9h11v2H3z" />
      <Path d="M20 2h-3c-1.103 0-2 .896-2 2v8H4a1 1 0 0 0-1 1c0 2.206 1.794 4 4 4h4.78l-.761 3.804A.998.998 0 0 0 12 22h9a1 1 0 0 0 1-1V4c0-1.104-.897-2-2-2zm0 2v2h-3V4h3zm-6.78 16l.761-3.804A.998.998 0 0 0 13 15H7a2 2 0 0 1-1.731-1H16a1 1 0 0 0 1-1V8h3v12h-6.78z" />
    </G>
  </Svg>
);

export default SvgComponent;
