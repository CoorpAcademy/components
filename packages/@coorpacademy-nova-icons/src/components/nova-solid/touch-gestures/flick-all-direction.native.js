import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 7.001v5H7l3 5h6v-5l-4-2v-3zM23 12.001l-3-3v2h-2v2h2v2zM4 13.001h2v-2H4v-2l-3 3 3 3zM11 5.001h2v-2h2l-3-3-3 3h2zM13 19.001h-2v2H9l3 3 3-3h-2zM8.439 4.836l-.892-1.791a10.093 10.093 0 0 0-4.429 4.358l1.775.921a8.081 8.081 0 0 1 3.546-3.488zM19.106 8.324l1.775-.921a10.088 10.088 0 0 0-4.429-4.358l-.892 1.791a8.071 8.071 0 0 1 3.546 3.488zM4.894 15.678l-1.776.922a10.091 10.091 0 0 0 4.429 4.357l.892-1.79a8.07 8.07 0 0 1-3.545-3.489zM15.561 19.166l.892 1.79a10.091 10.091 0 0 0 4.429-4.357l-1.775-.922a8.068 8.068 0 0 1-3.546 3.489z" />
    </G>
  </Svg>
);

export default SvgComponent;
