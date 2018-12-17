import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 22H6c-1.103 0-2-.897-2-2V4c0-1.104.897-2 2-2h7.531c.596 0 1.156.262 1.537.72l4.468 5.362A2 2 0 0 1 20 9.362V20c0 1.103-.897 2-2 2zM13.532 4H6v16h12.001L18 9.362 13.532 4z"
      fill="currentColor"
    />
    <Path fill="currentColor" d="M11 12h2v6h-2z" />
    <Circle cx={15} cy={13} r={1} fill="currentColor" />
    <Circle cx={15} cy={17} r={1} fill="currentColor" />
    <Circle cx={9} cy={17} r={1} fill="currentColor" />
    <Circle cx={9} cy={13} r={1} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
