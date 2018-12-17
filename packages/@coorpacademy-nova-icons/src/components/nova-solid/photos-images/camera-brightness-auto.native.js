import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.707 11.293L19 8.586V6.001a1 1 0 0 0-1-1h-2.586l-2.707-2.708a1 1 0 0 0-1.414 0L8.586 5.001H6a1 1 0 0 0-1 1v2.585l-2.707 2.707a1 1 0 0 0 0 1.415L5 15.415V18a1 1 0 0 0 1 1h2.586l2.707 2.707c.195.196.451.293.707.293s.512-.097.707-.293L15.414 19H18a1 1 0 0 0 1-1v-2.585l2.707-2.708a.999.999 0 0 0 0-1.414zM15 16h-2v-2h-2v2H9V9a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v7z" />
      <Path d="M11 10h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
