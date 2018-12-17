import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="#767676"
      d="M20 3h-4.001A.995.995 0 0 0 15 4v8.346c0 1.656-1.077 3.203-2.693 3.563-1.605.36-3.184-.369-3.96-1.864-.255-.492-.347-1.054-.347-1.61V8h3v4l3.999-5h-3V3L8 8V4c0-.552-.449-1-1.001-1h-4A.999.999 0 0 0 2 4v8.194c0 4.704 3.284 8.941 7.929 9.681 3.519.56 6.923-.784 9.098-3.574C20.367 16.58 21 14.411 21 12.232V4a1 1 0 0 0-1-1zM6 8H3.999V5H6v3zm13 0h-2.001V5H19v3z"
    />
  </Svg>
);

export default SvgComponent;
