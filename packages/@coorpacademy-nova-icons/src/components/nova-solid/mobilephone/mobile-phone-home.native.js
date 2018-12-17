import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 19c0-1.054.19-2.06.523-3H2V4h8v9.349a9.047 9.047 0 0 1 2-1.831V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h6.059A9.164 9.164 0 0 1 8 19zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6zM18 22h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
