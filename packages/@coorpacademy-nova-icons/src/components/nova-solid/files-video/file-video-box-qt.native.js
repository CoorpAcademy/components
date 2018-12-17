import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.035 10.771a.886.886 0 0 0-.885.885v1.771a.885.885 0 0 0 1.771 0v-1.771a.887.887 0 0 0-.886-.885z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM11.065 16.709l-.892-.893a2.619 2.619 0 0 1-1.138.265 2.657 2.657 0 0 1-2.655-2.654v-1.771a2.658 2.658 0 0 1 2.655-2.655 2.658 2.658 0 0 1 2.656 2.655v1.771c0 .409-.101.791-.267 1.138l.892.892-1.251 1.252zm6.555-5.957h-1.75v5.25h-1.75v-5.25h-1.75v-1.75h5.25v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
