import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 22H2V8h11.422A4.979 4.979 0 0 1 13 6H0v18h18V11a4.962 4.962 0 0 1-2-.422V22z" />
      <Path d="M10 10h4v4h-4zM10 16h4v4h-4zM4 10h4v4H4zM4 16h4v4H4zM15 5h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
