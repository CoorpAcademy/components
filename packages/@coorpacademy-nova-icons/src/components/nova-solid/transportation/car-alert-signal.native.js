import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.646 5.535l-1.33 1.494A8.011 8.011 0 0 1 20 13.007a8.015 8.015 0 0 1-2.669 5.966l1.333 1.49A10.017 10.017 0 0 0 22 13.007c0-2.851-1.222-5.574-3.354-7.472zM4 13.007c0-2.28.978-4.46 2.684-5.977l-1.33-1.494A10.009 10.009 0 0 0 2 13.007c0 2.842 1.216 5.56 3.336 7.456l1.333-1.49A8.015 8.015 0 0 1 4 13.007z" />
      <Path d="M12 7.007a6 6 0 1 0 0 12 6 6 0 0 0 0-12zm0 10a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm1-3h-2v-5h2v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
