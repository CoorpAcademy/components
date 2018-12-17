import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.985 20.872l-2.857-2.857-1.414 1.414.722.722L1 21.586 2.414 23l1.436-1.435.721.722zM3.143 15.159a.999.999 0 0 0 0 1.414l4.286 4.285a1 1 0 0 0 1.414 0l9.307-9.307-5.699-5.7-9.308 9.308z" />
      <Path d="M21.7 6.586L17.414 2.3A1 1 0 0 0 16 2.3l-.721.722-1.436-1.436a1.003 1.003 0 0 0-1.414 0L6 8.015l1.414 1.414 5.722-5.722 6.428 6.429L21.7 8a1 1 0 0 0 0-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
