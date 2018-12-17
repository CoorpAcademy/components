import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l11-11A.996.996 0 0 0 20 8zm-2-.414l-10 10L2.414 12l10-10H18v5.586z" />
      <Circle cx={15} cy={5} r={2} />
      <Path d="M23.707 14.287l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.003 1.003 0 0 0-.264.465l-1 4a1.003 1.003 0 0 0 1.213 1.213l4-1c.176-.045.337-.135.465-.264l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.805l-2.113.527.527-2.113L17 16.408l1.586 1.586-3.098 3.098zM20 16.58l-1.586-1.586L20 13.408l1.586 1.586L20 16.58z" />
    </G>
  </Svg>
);

export default SvgComponent;
