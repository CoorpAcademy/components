import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .007h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.814 15.418c-.377-.526-1.252-.526-1.629 0l-5 7a.999.999 0 0 0-.074 1.038.998.998 0 0 0 .889.543h10a.998.998 0 0 0 .889-.543.999.999 0 0 0-.074-1.038l-5.001-7zM13-.001H3a1.001 1.001 0 1 0-.815 1.581l5 7a1.002 1.002 0 0 0 1.629 0l5-7a.999.999 0 0 0 .074-1.038A.995.995 0 0 0 13-.001zM0 10.999h16v2H0z" />
      <Path d="M20 5.999h-1.586l1.293-1.293-1.414-1.414-3.707 3.707 3.707 3.707 1.414-1.414-1.293-1.293H20c1.104 0 2 .897 2 2v4a2 2 0 0 1-2 2h-3v2h3c2.205 0 4-1.795 4-4v-4c0-2.205-1.795-4-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
