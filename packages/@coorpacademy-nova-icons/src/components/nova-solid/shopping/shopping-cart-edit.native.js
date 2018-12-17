import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={8} cy={22} r={2} />
      <Circle cx={16} cy={22} r={2} />
      <Path d="M20 3.999c-.466 0-.869.321-.975.775L18.051 9H14.77c-.91 4.007-4.487 7-8.769 7-.182 0-.359-.017-.537-.027l.566 2.27A1 1 0 0 0 7 19h10c.466 0 .869-.321.975-.775l2.82-12.226H24v-2h-4zM12.707 4.707a.999.999 0 0 0 0-1.414l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.001 1.001 0 0 0-.263.465l-1 4a.997.997 0 0 0 1.212 1.212l4-1c.176-.044.337-.135.465-.263l7-7zM9 2.414L10.586 4 9 5.586 7.414 4 9 2.414zm-4.512 7.683l-2.114.529.529-2.114L6 5.414 7.586 7l-3.098 3.097z" />
    </G>
  </Svg>
);

export default SvgComponent;
