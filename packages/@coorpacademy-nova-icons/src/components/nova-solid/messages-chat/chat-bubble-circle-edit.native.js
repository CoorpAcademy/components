import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.998 16a9 9 0 0 1-9-9c0-.201.017-.398.03-.595C3.96 7.547.998 10.968.998 15c0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.494 0 9.963-4.008 9.997-8.945a8.954 8.954 0 0 1-3.997.945z" />
      <Path d="M20.705.293a.999.999 0 0 0-1.414 0l-7 7a1.005 1.005 0 0 0-.263.465l-1.001 4a1 1 0 0 0 1.213 1.213l4-1.001c.176-.043.336-.136.465-.263l7-7a1 1 0 0 0 0-1.414l-3-3zm-5.219 9.803l-2.114.53.53-2.114 3.096-3.098L18.583 7l-3.097 3.096zm4.512-4.51L18.412 4l1.586-1.586L21.584 4l-1.586 1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
