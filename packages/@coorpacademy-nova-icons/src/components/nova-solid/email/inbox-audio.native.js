import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 2v11h2V4h12v9h2V2z" />
      <Path d="M15.018 5.482l-5 1.63a.75.75 0 0 0-.518.713V11a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H11v-4l3.5-1.141V10a1.5 1.5 0 1 0 1.5 1.5c0-.045-.01-.087-.014-.131H16V6.195a.746.746 0 0 0-.311-.607.745.745 0 0 0-.671-.106zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z" />
    </G>
  </Svg>
);

export default SvgComponent;
