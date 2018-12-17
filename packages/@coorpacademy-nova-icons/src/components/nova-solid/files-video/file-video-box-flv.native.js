import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM9.375 10.75h-3.5v.875H8.5v1.75H5.875V16h-1.75v-5.25c0-.964.785-1.75 1.75-1.75h3.5v1.75zm5.25 5.25H10.25V9H12v5.25h2.625V16zm3.518 0h-1.8l-1.718-7h1.75l.862 3.414L18.075 9h1.8l-1.75 6.931.018.069z"
    />
  </Svg>
);

export default SvgComponent;
