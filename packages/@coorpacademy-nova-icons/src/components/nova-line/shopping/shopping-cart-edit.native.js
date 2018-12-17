import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H11v2h6.589l-1.384 6H7.781l-.75-3H4.969l1.061 4.243A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4zM5.707 11.707l7-7a.999.999 0 0 0 0-1.414l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.003 1.003 0 0 0-.264.465l-1 4a1.003 1.003 0 0 0 1.213 1.213l4-1c.176-.045.337-.136.465-.264zM9 2.414L10.586 4 9 5.586 7.414 4 9 2.414zm-6.625 8.212l.527-2.115L6 5.414 7.586 7l-3.098 3.097-2.113.529z" />
    </G>
  </Svg>
);

export default SvgComponent;
