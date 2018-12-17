import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3zm3.021 13h-2.058l-.977-3.983L11 15.919l.021.081H8.963L7 8h2l.985 3.901L10.942 8H13l.985 3.901L14.942 8H17l-2 7.919.021.081z"
    />
  </Svg>
);

export default SvgComponent;
