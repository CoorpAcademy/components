import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M11 11h8.949c.033-.329.051-.662.051-1 0-4.1-2.47-7.619-6-9.162V4h-3v3h3v3l-3 1zM4 7l3-2V.459C2.943 1.734 0 5.523 0 10c0 4.838 3.435 8.873 8 9.799V15.4L4 13V7zM22 13H12c-1.103 0-2 .898-2 2v7c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-7c0-1.102-.897-2-2-2zm-1.762 2L17 17.699 13.762 15h6.476zM12 22v-5.865l5 4.167 5-4.167.001 5.865H12z" />
    </G>
  </Svg>
);

export default SvgComponent;
