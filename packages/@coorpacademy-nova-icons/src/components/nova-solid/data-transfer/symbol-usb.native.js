import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 6.002h-4v4h1v1.381l-2 1V5.002h2l-3-3-3 3h2v9.381l-2-1v-1.658c.596-.348 1-.984 1-1.723a2 2 0 0 0-4 0c0 .738.404 1.376 1 1.723v2.277c0 .379.214.725.553.894l2.993 1.496A2.989 2.989 0 0 0 9 19.002a3 3 0 0 0 6 0 2.99 2.99 0 0 0-2-2.816V14.62l3.447-1.723c.339-.17.553-.516.553-.895v-2h1v-4z"
    />
  </Svg>
);

export default SvgComponent;
