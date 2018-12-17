import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <Path
      d="M16.615 10.212a1 1 0 0 0-.857-.182L13 10.719v-.861c1.721-.447 3-2 3-3.858C16 4.058 13.288.938 12.744.332c-.379-.422-1.109-.422-1.488 0C10.712.938 8 4.058 8 6c0 1.858 1.279 3.411 3 3.858v1.361l-3.242.811A1 1 0 0 0 7 13v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V11c0-.308-.143-.598-.385-.788zM10 6c0-.638.939-2.126 2-3.452C13.061 3.874 14 5.362 14 6c0 1.103-.896 2-2 2s-2-.897-2-2zm5 16H9v-8.219l6-1.5V22z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
