import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 11.003h1.5a.5.5 0 0 0 0-1H11v1zM12.5 13.003H11v1h1.5a.5.5 0 0 0 0-1z" />
      <Path d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm3 11.5c0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-8h2v-1h2v1.051c1.14.232 2 1.243 2 2.449 0 .566-.195 1.082-.513 1.5.318.419.513.935.513 1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
