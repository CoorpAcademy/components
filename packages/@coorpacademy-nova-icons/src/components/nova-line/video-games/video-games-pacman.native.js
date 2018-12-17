import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={11.498} cy={7.498} r={1.5} />
      <Path d="M14.412 11.998l5.641-5.641a.999.999 0 0 0 .001-1.413c-1.896-1.899-4.401-2.946-7.056-2.946-5.514 0-10 4.487-10 10 0 5.514 4.486 10 10 10 2.654 0 5.16-1.045 7.056-2.945a.999.999 0 0 0-.001-1.413l-5.641-5.642zm-1.414 8c-4.411 0-8-3.588-8-8 0-4.411 3.589-8 8-8 1.787 0 3.491.596 4.892 1.694l-5.599 5.599a1 1 0 0 0 0 1.415l5.599 5.599a7.9 7.9 0 0 1-4.892 1.693z" />
    </G>
  </Svg>
);

export default SvgComponent;
