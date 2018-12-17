import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M17.605 14.447L18.382 16H3.618l2-4H11v-2H4.382L1 16.764V22h2c0 1.104.897 2 2 2s2-.896 2-2h8c0 1.104.897 2 2 2s2-.896 2-2h2v-5.236l-1.605-3.211-1.79.894zM14 20H8v-2h6v2zM3 18h3v2H3v-2zm13 2v-2h3v2h-3zM18 0c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.216 2.019.566L14.567 8.02A3.954 3.954 0 0 1 14 6c0-2.205 1.794-4 4-4zm0 8c-.74 0-1.424-.216-2.019-.566l5.452-5.453A3.95 3.95 0 0 1 22 6c0 2.205-1.794 4-4 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
