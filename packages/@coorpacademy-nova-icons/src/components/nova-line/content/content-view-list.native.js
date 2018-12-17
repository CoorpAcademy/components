import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      d="M20 8h-9c-1.104 0-2-.897-2-2V4c0-1.103.896-2 2-2h9c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zm-9-4v2h8.997L20 4h-9zM20 15h-9c-1.104 0-2-.897-2-2v-2c0-1.103.896-2 2-2h9c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zm-9-4v2h8.997L20 11h-9zM20 22h-9c-1.104 0-2-.897-2-2v-2c0-1.103.896-2 2-2h9c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zm-9-4v2h8.997L20 18h-9zM6 8H4c-1.104 0-2-.897-2-2V4c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zM4 4v2h1.997L6 4H4zM6 15H4c-1.104 0-2-.897-2-2v-2c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zm-2-4v2h1.997L6 11H4zM6 22H4c-1.104 0-2-.897-2-2v-2c0-1.103.896-2 2-2h2c1.104 0 2 .897 2 2v2c0 1.103-.896 2-2 2zm-2-4v2h1.997L6 18H4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
