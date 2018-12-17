import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M8.434 11L5 16.724V21h2v.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V21h6v.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V21h2v-4.276L17.566 11H8.434zm1.132 2h6.867l1.8 3H7.766l1.8-3zM15 19h-4v-1h4v1zm-8-1h2v1H7v-1zm10 1v-1h2v1h-2zM11.858 4.001C11.411 2.281 9.858 1 8 1 5.794 1 4 2.794 4 5s1.794 4 4 4c1.858 0 3.41-1.279 3.858-2.999h2.143L14 8.002h2L16.001 6h2L18 9h2l.001-3H22V4l-10.142.001zM8 7c-1.103 0-2-.897-2-2 0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
