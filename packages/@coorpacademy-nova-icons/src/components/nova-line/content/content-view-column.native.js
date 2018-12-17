import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      d="M20 21h-2c-1.104 0-2-.897-2-2V5c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zM18 5v14h1.997L20 5h-2zM13 21h-2c-1.104 0-2-.897-2-2V5c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zM11 5v14h1.997L13 5h-2zM6 21H4c-1.104 0-2-.897-2-2V5c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zM4 5v14h1.997L6 5H4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
