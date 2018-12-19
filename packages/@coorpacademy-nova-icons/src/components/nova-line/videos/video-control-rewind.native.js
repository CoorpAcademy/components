import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.879 5.249a2.04 2.04 0 0 0-2.107.217L10.4 10.422c-.49.382-.771.957-.771 1.578s.281 1.196.772 1.578l6.372 4.957a2 2 0 0 0 2.107.217A2.015 2.015 0 0 0 20 16.955v-9.91c0-.758-.44-1.463-1.121-1.796zM18 16.956l-6.371-4.955L18 7.045v9.911z" />
      <Path d="M14.625 4.781l-1.25-1.561-10 8a.997.997 0 0 0 0 1.561l10 8 1.249-1.562L5.601 12l9.024-7.219z" />
    </G>
  </Svg>
);

export default SvgComponent;
