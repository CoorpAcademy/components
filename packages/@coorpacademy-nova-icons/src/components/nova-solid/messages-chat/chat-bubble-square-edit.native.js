import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7.998 7h-6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-2a9 9 0 0 1-9-9z" />
      <Path d="M20.705.293a.999.999 0 0 0-1.414 0l-7 7a1.005 1.005 0 0 0-.263.465l-1.001 4a1 1 0 0 0 1.213 1.213l4-1.001c.176-.043.336-.136.465-.263l7-7a1 1 0 0 0 0-1.414l-3-3zm-5.219 9.803l-2.114.53.53-2.114 3.096-3.098L18.583 7l-3.097 3.096zm4.512-4.51L18.412 4l1.586-1.586L21.584 4l-1.586 1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
