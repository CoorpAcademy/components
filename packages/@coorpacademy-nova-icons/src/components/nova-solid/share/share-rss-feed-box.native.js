import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2V4c0-1.103-.896-2-2-2zM8 18a2 2 0 1 1-.001-3.999A2 2 0 0 1 8 18zm4 0c0-3.309-2.691-6-6-6v-2c4.411 0 8 3.588 8 8h-2zm4 0c0-5.516-4.486-10-10-10V6c6.617 0 12 5.383 12 12h-2z"
    />
  </Svg>
);

export default SvgComponent;
