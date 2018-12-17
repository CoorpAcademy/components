import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.063 12.95C11.181 9.825 8 10.857 8 13.238c0 2.507 3.937 4.873 3.937 4.873.337-.197 4.063-2.17 4.063-4.873 0-2.381-3.054-3.413-3.937-.288z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
