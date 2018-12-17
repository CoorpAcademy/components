import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 17h-.105l-.9-8.11A1.001 1.001 0 0 0 19 8h-2V7h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2v1h-4V4a.998.998 0 0 0-1.447-.894L8 3.882l-1.553-.776A.998.998 0 0 0 5 4v4a1 1 0 0 0-.994.89L3.105 17H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zM14 5V4h4v1h-4zm-7 .619l.553.275a1 1 0 0 0 .895 0L9 5.619V8H7V5.619zM5.895 10h12.21l.777 7H5.117l.778-7zM20 21H4v-2h16v2z" />
      <Path d="M7 11h4v2H7z" />
      <Circle cx={13} cy={12} r={1} />
      <Circle cx={16} cy={12} r={1} />
      <Circle cx={13} cy={15} r={1} />
      <Circle cx={16} cy={15} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
