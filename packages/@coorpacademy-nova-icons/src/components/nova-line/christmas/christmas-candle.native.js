import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <Path
      d="M17.634 10.227a.992.992 0 0 0-.83-.207L13 10.781v-.923c1.721-.447 3-2 3-3.858C16 4.059 13.288.937 12.744.332c-.379-.422-1.109-.422-1.488 0C10.712.938 8 4.059 8 6c0 1.858 1.279 3.411 3 3.858v1.323l-4.196.839A.998.998 0 0 0 6 13v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11a1 1 0 0 0-.366-.773zM10 6c0-.638.939-2.126 2-3.451C13.061 3.874 14 5.362 14 6a2 2 0 0 1-4 0zm6 12.181l-8 1.6v-1.96l8-1.601v1.961zm0-5.961v1.961l-8 1.6v-1.96l8-1.601zm0 8V22H8l8-1.78z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
