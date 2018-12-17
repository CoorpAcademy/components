import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3.636 14.707l1.418 1.418-.004-.003L2 19.172 4.829 22l3.05-3.049 1.414 1.414 1.915-1.914-5.658-5.658zM8.586 12.586l-1.001 1 2.829 2.828 1-1a2 2 0 1 0-2.828-2.828zM20.193 9.465l-1.414-1.414 3.535-3.536-2.828-2.828-3.536 3.535-1.414-1.414L11 7.344v2.829L13.829 13h2.828l3.536-3.535zm-7.778-.707l2.121-2.121 2.829 2.828-2.121 2.121-2.829-2.828zM20.294 15.293L17 18.586V16h-2v6h6v-2h-2.585l3.293-3.294zM3.762 8.703l3.239-3.271V8H9V2H3v2h2.603L2.34 7.297z" />
    </G>
  </Svg>
);

export default SvgComponent;
