import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.998 18H7.665l-2.667 2v-2h-3V9h9V7h-9c-1.103 0-2 .896-2 2v9c0 1.103.897 2 2 2h1v4l5.333-4h6.667c1.103 0 2-.897 2-2v-6h-2v6zM20.705 3.707l-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414L15.584 6l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L18.412 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
