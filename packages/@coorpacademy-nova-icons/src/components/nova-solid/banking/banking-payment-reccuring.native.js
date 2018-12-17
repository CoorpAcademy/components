import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.264 13H2.95c1.476 2.958 4.525 5 8.05 5v-2a6.993 6.993 0 0 1-5.736-3zM3 12l3-3H4c0-3.86 3.141-7 7-7a6.988 6.988 0 0 1 5.736 3h2.314C17.574 2.042 14.525 0 11 0 6.038 0 2 4.038 2 9H0l3 3zM19 5.999l-3 3h2c0 1.075-.25 2.09-.685 3h2.159A8.902 8.902 0 0 0 20 9h2l-3-3.001z" />
      <Path d="M14.001 10.5c0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1h3.5V5h-2V4h-2v1.05c-1.14.232-2 1.242-2 2.449 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1h-3.5v2h2v1H11v-2h2.491c.317-.417.51-.936.51-1.499zM23 13H13c-.552 0-1 .449-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-6 6v-2h2v2h-2zm2 1v2h-2v-2h2zm-3-3v2h-2v-2h2zm4 0h2v2h-2v-2zm-6 3h2v2h-2v-2zm6 2v-2h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
