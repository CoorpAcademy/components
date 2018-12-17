import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M14.998 14v4H7.664l-2.666 2v-2h-3V9h7V7h-7a2 2 0 0 0-2 2v9c0 1.103.896 2 2 2h1v4l5.334-4h6.666c1.104 0 2-.897 2-2v-4h-2z"
      fill="currentColor"
    />
    <Path
      d="M18.998 10h-4V6l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V8l-2-2v4z"
      fill="currentColor"
    />
    <Path
      d="M22.291 7.707l-5.293-5.293-5.293 5.293-1.414-1.414 6-6a.999.999 0 0 1 1.414 0l6 6-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
