import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 9c-1.654 0-3 1.345-3 3 0 .462.113.895.301 1.286l3.984-3.985A2.98 2.98 0 0 0 12 9zM10.715 14.7c.391.187.823.3 1.285.3 1.654 0 3-1.345 3-3 0-.461-.113-.894-.301-1.285L10.715 14.7z" />
      <Path d="M20 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4c0-1.103-.896-2-2-2zM4 6.001c0-1.103.897-2 2-2h4v2H6v4H4v-4zM10 20H6c-1.103 0-2-.897-2-2v-4h2v4h4v2zm-3-8c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.242-5-5zm13 6c0 1.103-.897 2-2 2h-4v-2h4v-4h2v4zm0-8h-2V6h-4V4h4c1.103 0 2 .897 2 2v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
