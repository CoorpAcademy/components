import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M17 14c-2.205 0-4 1.795-4 4 0 1.103-.896 2-2 2a1.995 1.995 0 0 1-1.721-.998H7.143C7.591 20.721 9.143 22 11 22c2.205 0 4-1.794 4-4 0-1.104.897-2 2-2 3 0 3 1.453 3 2v4h2v-4c0-1.203-.487-4-5-4z" />
      <Path d="M10.882 17.472a.998.998 0 0 0-.05-1.026l-1.008-1.512C11.449 13.653 14 11.146 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 3.146 2.552 5.653 4.176 6.933l-1.008 1.512A.998.998 0 0 0 6.001 18h4a.999.999 0 0 0 .881-.528zM6.001 8h-2V7c0-1.654 1.346-3 3-3h1v2h-1c-.551 0-1 .449-1 1v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
