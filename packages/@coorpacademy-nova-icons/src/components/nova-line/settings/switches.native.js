import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M17.5 11h-11A4.505 4.505 0 0 1 2 6.5C2 4.018 4.019 2 6.5 2h11C19.981 2 22 4.018 22 6.5S19.981 11 17.5 11zm-11-7C5.121 4 4 5.121 4 6.5S5.121 9 6.5 9h11C18.879 9 20 7.878 20 6.5S18.879 4 17.5 4h-11z"
      fill="currentColor"
    />
    <Circle cx={16} cy={6.5} r={2} fill="currentColor" />
    <Path
      d="M17.5 22h-11A4.505 4.505 0 0 1 2 17.5C2 15.018 4.019 13 6.5 13h11c2.481 0 4.5 2.019 4.5 4.5 0 2.482-2.019 4.5-4.5 4.5zm-11-7C5.121 15 4 16.121 4 17.5S5.121 20 6.5 20h11c1.379 0 2.5-1.122 2.5-2.5S18.879 15 17.5 15h-11z"
      fill="currentColor"
    />
    <Circle cx={8} cy={17.5} r={2} fill="currentColor" />
  </Svg>
);

export default SvgComponent;
