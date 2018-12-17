import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M9.808 12.365l2.828 2.827-3.535.707zM20.414 7.414a2 2 0 1 0-2.828-2.828l-6.364 6.364 2.829 2.829 6.363-6.365z"
    />
    <Path
      d="M23 22H1a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h6v2H2v6h20v-6h-4v-2h5a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
