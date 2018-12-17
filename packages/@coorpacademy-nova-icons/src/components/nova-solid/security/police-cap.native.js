import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.486 7.126l-9-5a1.006 1.006 0 0 0-.972 0l-9 5a1.003 1.003 0 0 0-.443 1.246l2 5a1 1 0 0 0 .93.628h14a1 1 0 0 0 .928-.628l2-5a1 1 0 0 0-.443-1.246zM12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM19 15.001H5a1.001 1.001 0 0 0-.928 1.376C5.607 20.161 8.2 22.001 12 22.001s6.393-1.84 7.926-5.624A.998.998 0 0 0 19 15.001z" />
    </G>
  </Svg>
);

export default SvgComponent;
