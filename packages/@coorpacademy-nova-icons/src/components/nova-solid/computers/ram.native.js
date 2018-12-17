import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.253 14.475L9.525 1.747a2 2 0 0 0-2.829 0l-4.95 4.95a2 2 0 0 0 0 2.828L3.16 8.111l4.95 4.949-1.414 1.414 2.829 2.829 1.414-1.415 4.95 4.95-1.414 1.414a2 2 0 0 0 2.828 0l4.95-4.95a1.998 1.998 0 0 0 0-2.827zM5.282 5.989l2.829-2.828 2.829 2.828-2.829 2.829-2.829-2.829zm4.95 4.95l2.828-2.828 2.829 2.828-2.829 2.828-2.828-2.828zm7.778 7.778l-2.828-2.828 2.828-2.828 2.829 2.828-2.829 2.828z"
    />
  </Svg>
);

export default SvgComponent;
