import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.004h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M5 10h7a1 1 0 1 0 0-2H5a1 1 0 1 0 0 2zM17 19h-.816A2.993 2.993 0 0 0 19 21a3 3 0 0 0 3-3c0-.918-.422-1.73-1.073-2.281A4 4 0 0 1 17 19z" />
      <Path d="M20 10.667V7c0-1.654-1.346-3-3-3h-2v2h2c.551 0 1 .449 1 1v8c0 .551-.449 1-1 1h-5v-4a1 1 0 0 0-1-1H7c-2.757 0-5 2.243-5 5v2h15c1.654 0 3-1.346 3-3v-1.667L22 14v-4l-2 .667zM4 16c0-1.654 1.346-3 3-3h3v3H4zM7 21a2.992 2.992 0 0 0 2.816-2H4.184A2.992 2.992 0 0 0 7 21z" />
    </G>
  </Svg>
);

export default SvgComponent;
