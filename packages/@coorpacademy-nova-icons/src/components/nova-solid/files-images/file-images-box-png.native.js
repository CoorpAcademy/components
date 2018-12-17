import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.875 10.75H5v1.75h.875a.874.874 0 1 0 0-1.75z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.875 14.25H5V16H3.25V9h2.625A2.629 2.629 0 0 1 8.5 11.625a2.627 2.627 0 0 1-2.625 2.625zm8.75.875a.875.875 0 0 1-1.603.485l-1.897-2.845V16h-1.75V9.875a.876.876 0 0 1 1.603-.485l1.897 2.847V9h1.75v6.125zm6.125-4.375h-3.5v3.5H19v-.875h-.875v-1.75h2.625v2.625c0 .965-.785 1.75-1.75 1.75h-1.75c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
