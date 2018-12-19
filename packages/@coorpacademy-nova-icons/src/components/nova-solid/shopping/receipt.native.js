import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21 2h-9c-1.654 0-3 1.346-3 3v9h5c2 0 3 2 3 3v2c-.554 0-1-.547-1-1 0-1.542-1.458-3-3-3H5C1.224 15 .066 20.567.019 20.804A1.001 1.001 0 0 0 1 22h8a1 1 0 0 0 1-1h7c1.654 0 3-1.346 3-3V9h3a1 1 0 0 0 1-1V5c0-1.654-1.346-3-3-3zM10.367 19c.371-1 1.119-2 2.633-2 .449 0 1 .552 1 1 0 .348.077.683.197 1h-3.83zM18 13h-7v-2h7v2zm0-3h-7V8h7v2zm0-3h-7V5h7v2zm4 0h-2V5a1.001 1.001 0 0 1 2 0v2z"
    />
  </Svg>
);

export default SvgComponent;
