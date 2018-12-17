import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19 8.84v2.15c.154.306.25.645.25 1.01 0 1.24-1.01 2.25-2.25 2.25s-2.25-1.01-2.25-2.25c0-.365.096-.704.25-1.01V8.84A3.738 3.738 0 0 0 13.25 12c0 2.068 1.682 3.75 3.75 3.75s3.75-1.682 3.75-3.75A3.738 3.738 0 0 0 19 8.84z" />
      <Path d="M16 7h2v4h-2zM14 8V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4H4V8h10zm-2-4v2H4V4h8zm0 14v2H4v-2h8z" />
    </G>
  </Svg>
);

export default SvgComponent;
