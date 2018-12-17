import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.525 15.019l.732-5.126 1.485.212-.705 4.936a14.805 14.805 0 0 1 7.289 2.485A9.926 9.926 0 0 0 22 12c0-5.514-4.486-10-10-10S2 6.486 2 12c0 2.042.618 3.942 1.673 5.526a14.808 14.808 0 0 1 7.852-2.507zM18 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-4-2a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM8 7a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-2 4a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
      <Path d="M12 17c-2.54 0-4.955.718-7.054 2.081A9.964 9.964 0 0 0 12 22a9.97 9.97 0 0 0 7.055-2.92A12.863 12.863 0 0 0 12 17z" />
    </G>
  </Svg>
);

export default SvgComponent;
