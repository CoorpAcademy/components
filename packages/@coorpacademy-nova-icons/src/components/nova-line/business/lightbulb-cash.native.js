import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2c-4.411 0-8 3.589-8 8a8.042 8.042 0 0 0 4 6.922V20a1 1 0 0 0 1 1h2v1h2v-1h2a1 1 0 0 0 1-1v-3.078A8.043 8.043 0 0 0 20 10c0-4.411-3.589-8-8-8zm-2 17v-1h4v1h-4zm4.57-3.584a.995.995 0 0 0-.513.584H9.942a.995.995 0 0 0-.513-.584A6.03 6.03 0 0 1 6 10c0-3.308 2.691-6 6-6s6 2.692 6 6a6.03 6.03 0 0 1-3.43 5.416z" />
      <Path d="M13 5h-2v1.051C9.86 6.283 9 7.293 9 8.5c0 1.378 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V6h-2V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
