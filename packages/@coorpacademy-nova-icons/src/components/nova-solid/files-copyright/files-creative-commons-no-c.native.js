import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 8c.338 0 .671.023 1 .059V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h7.518A9 9 0 0 1 17 8zm-5-7l5 5h-5V1z" />
      <Path d="M19 21h-3c-1.654 0-3-1.346-3-3v-2c0-.462.113-.894.301-1.285L11.4 12.814A6.95 6.95 0 0 0 10 17a7 7 0 0 0 7 7 6.967 6.967 0 0 0 4.187-1.398L19 20.414V21zM17 10a6.954 6.954 0 0 0-4.186 1.399l1.901 1.901c.391-.187.823-.3 1.285-.3h3v2h-2.586l6.186 6.187A6.951 6.951 0 0 0 24 17a7 7 0 0 0-7-7z" />
      <Path d="M17.586 19L15 16.414V18c0 .552.449 1 1 1h1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
