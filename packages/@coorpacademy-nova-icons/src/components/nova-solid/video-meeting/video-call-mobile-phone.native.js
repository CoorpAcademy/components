import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M7 17c0-1.841 1.159-3 3-3s3 1.159 3 3H7z" />
    <Circle fill="currentColor" cx={10} cy={11} r={2} />
    <Path
      fill="currentColor"
      d="M16 9v11H4V6h8V2H4c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2V9h-2z"
    />
    <Path
      fill="currentColor"
      d="M20 3V2a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V5l3 1V2l-3 1z"
    />
  </Svg>
);

export default SvgComponent;
