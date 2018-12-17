import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M12 2C7.527 2 3 3.374 3 6v12c0 2.626 4.527 4 9 4s9-1.374 9-4V6c0-2.626-4.527-4-9-4zm0 2c4.547 0 7 1.42 7 2s-2.453 2-7 2-7-1.42-7-2 2.453-2 7-2zm0 16c-4.547 0-7-1.42-7-2v-1.4c1.736.923 4.374 1.4 7 1.4s5.264-.478 7-1.4V18c0 .58-2.453 2-7 2zm0-4c-4.547 0-7-1.42-7-2v-1.4c1.736.923 4.374 1.4 7 1.4s5.264-.478 7-1.4V14c0 .58-2.453 2-7 2zm0-4c-4.547 0-7-1.42-7-2V8.6c1.736.922 4.374 1.4 7 1.4s5.264-.478 7-1.4V10c0 .58-2.453 2-7 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
