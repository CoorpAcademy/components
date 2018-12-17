import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <Path fill="currentColor" d="M20 13h-2V4H6v9H4V2h16z" />
    <Path
      fill="currentColor"
      d="M12 6a4 4 0 0 0-4 4c0 1.477.81 2.752 2 3.445V15h4v-1.555c1.19-.693 2-1.969 2-3.445a4 4 0 0 0-4-4zm-2 5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm4 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z"
    />
  </Svg>
);

export default SvgComponent;
