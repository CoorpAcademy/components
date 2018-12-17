import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path d="M18 11h-4a1 1 0 0 1-1-1V4h2v5h3v2z" fill="currentColor" />
    <Path
      d="M6.589 13A7.95 7.95 0 0 1 6 10c0-4.411 3.589-8 8-8s8 3.589 8 8a7.949 7.949 0 0 1-1.766 5h2.412A9.919 9.919 0 0 0 24 10c0-5.514-4.486-10-10-10S4 4.486 4 10a9.95 9.95 0 0 0 .461 3h2.128z"
      fill="currentColor"
    />
    <Path
      d="M20.895 17.552A1 1 0 0 0 20 17h-7.586l.293-.293a1 1 0 0 0 .188-1.154l-1-2a1.002 1.002 0 0 0-1.211-.502l-4.757 1.586A.996.996 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11a1 1 0 0 0 .8-.4l3-4c.227-.304.264-.709.095-1.048zM2 22v-6h2v6H2zm14.5-1H6v-4.28l4.494-1.497.289.579-1.49 1.491A.99.99 0 0 0 9.01 18H9v1h9l-1.5 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
