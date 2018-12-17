import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      d="M20 11H4c-1.104 0-2-.897-2-2V4c0-1.103.896-2 2-2h16c1.104 0 2 .897 2 2v5c0 1.103-.896 2-2 2zM4 4v5h15.997L20 4H4zM20 22H4c-1.104 0-2-.897-2-2v-5c0-1.103.896-2 2-2h16c1.104 0 2 .897 2 2v5c0 1.103-.896 2-2 2zM4 15v5h15.997L20 15H4z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
