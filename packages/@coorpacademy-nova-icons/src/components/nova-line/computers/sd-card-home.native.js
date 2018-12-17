import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path fill="currentColor" d="M3 4h2v3H3zM6 4h2v3H6z" />
    <Path
      d="M8 18H2V2h7.532L14 7.362V10h2V7.362c0-.467-.164-.921-.463-1.28L11.068.72A1.991 1.991 0 0 0 9.531 0H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h6v-2zM19 22h-4v-4l-2 2v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3l-2-2v4z"
      fill="currentColor"
    />
    <Path
      d="M22.293 19.707L17 14.414l-5.293 5.293-1.414-1.414 6-6a.999.999 0 0 1 1.414 0l6 6-1.414 1.414z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
