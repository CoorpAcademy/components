import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M12 2C7.582 2 4 3.344 4 5v14c0 1.657 3.582 3 8 3s8-1.343 8-3V5c0-1.656-3.581-3-8-3zm0 18.007c-2.254 0-4.328-.377-6-1.007V7c1.672.63 3.746 1.007 6 1.007v12zM12 6c-3.314 0-6-.447-6-1 0-.552 2.686-1 6-1s6 .448 6 1c0 .553-2.686 1-6 1z"
    />
  </Svg>
);

export default SvgComponent;
