import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.5 8c-.979 0-1.864.407-2.5 1.059A3.484 3.484 0 0 0 9.5 8C7.57 8 6 9.57 6 11.5V17h12v-5.5C18 9.57 16.43 8 14.5 8zM11 15H8v-3.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V15zm5 0h-3v-3.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V15zM4.293 8.293L.586 12l3.707 3.707 1.414-1.414L3.414 12l2.293-2.293zM19.707 8.293l-1.414 1.414L20.586 12l-2.293 2.293 1.414 1.414L23.414 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
