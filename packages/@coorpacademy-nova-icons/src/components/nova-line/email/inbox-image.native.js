import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 3h12v9h2V1H4v11h2z" />
      <Path d="M9.065 7.665L7 10.979h10L13.273 5l-2.935 4.707zM21 14h-5a.996.996 0 0 0-.707.293L13.586 16h-3.172l-1.707-1.707A.996.996 0 0 0 8 14H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H4v-4h3.586l1.707 1.707A.996.996 0 0 0 10 18h4c.266 0 .52-.105.707-.293L16.414 16H20v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
