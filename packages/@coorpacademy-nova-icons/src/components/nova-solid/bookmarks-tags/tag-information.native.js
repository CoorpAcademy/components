import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 18a8 8 0 0 1 8-8c.133 0 .263.014.395.019l1.312-1.312A.997.997 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.997.997 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l1.312-1.312C10.014 18.263 10 18.133 10 18zm5-15a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
      <Path d="M18 11.999c-3.309 0-6 2.693-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.307-2.692-6-6-6zM19 22h-2v-4h2v4zm0-6a1 1 0 1 1-2 0 1 1 0 1 1 2 0z" />
    </G>
  </Svg>
);

export default SvgComponent;
