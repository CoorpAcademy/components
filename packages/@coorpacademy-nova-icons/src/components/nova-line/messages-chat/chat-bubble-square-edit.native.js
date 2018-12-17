import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 14v3.984H7.665l-2.667 2v-2h-3v-9h8V7l.018-.016H1.998c-1.103 0-2 .896-2 2v9c0 1.104.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.896 2-2V14h-2z" />
      <Path d="M20.705.293a.999.999 0 0 0-1.414 0l-7 7a1.01 1.01 0 0 0-.263.465l-1 4a1.002 1.002 0 0 0 1.213 1.213l4-1c.176-.044.336-.137.465-.263l7-7a1.001 1.001 0 0 0 0-1.415l-3.001-3zm-5.219 9.803l-2.114.53.53-2.114 3.096-3.098L18.583 7l-3.097 3.096zm4.512-4.51L18.412 4l1.586-1.586L21.584 4l-1.586 1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
