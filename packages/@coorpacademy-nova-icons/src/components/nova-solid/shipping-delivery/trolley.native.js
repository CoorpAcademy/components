import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M20 4V2h-3a1 1 0 0 0-1 1v11c-2.205 0-4 1.794-4 4H7c-.266 0-.519.106-.707.293l-2 2 1.414 1.413L7.414 20h5.142c.693 1.19 1.97 2 3.443 2 2.205 0 4-1.794 4-4 0-1.474-.81-2.749-2-3.443V4H20z"
    />
  </Svg>
);

export default SvgComponent;
