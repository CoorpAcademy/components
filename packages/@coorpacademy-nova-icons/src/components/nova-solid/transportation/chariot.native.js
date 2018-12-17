import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21 12v1c0 .551-.449 1-1 1h-6.35c-.826-2.326-3.044-4-5.65-4-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6h6c1.654 0 3-1.346 3-3v-1h-2zm-9.076 3.25H8.75v-3.174a4.003 4.003 0 0 1 3.174 3.174zM7.25 12.076v3.174H4.076a4.003 4.003 0 0 1 3.174-3.174zM4.076 16.75H7.25v3.174a4.002 4.002 0 0 1-3.174-3.174zm4.674 3.174V16.75h3.174a4.002 4.002 0 0 1-3.174 3.174z" />
      <Path d="M8 9a6.987 6.987 0 0 1 5.74 3H14V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v8h.26A6.987 6.987 0 0 1 8 9zm1-5h3v3H9V4zM4 4h3v3H4V4zM19 17h2v4h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
