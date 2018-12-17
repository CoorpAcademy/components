import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M18.603 3.568A4.934 4.934 0 0 0 15 2v5.171l3.603-3.603zM7 11.899v3.272l2-2v-1.272A5.008 5.008 0 0 0 13 7V2h-2v5a2.992 2.992 0 0 1-2 2.815V2H7v7.815A2.992 2.992 0 0 1 5 7V2H3v5a5.008 5.008 0 0 0 4 4.899zM21.293 3.707L3.322 21.678l1.414 1.414L7 20.828V21h2v-2.172l6-6V21h2v-7h3V7.828l2.707-2.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
