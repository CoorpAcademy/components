import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 12.018v3.053l-1.625-1.626c-1.041 1.261-1.146 2.319-.863 3.043L7 19h2l1.511-1.511c.826.322 2.085.142 3.584-1.356C16.032 14.196 17 10 17 10s-2.908.675-5 2.018z" />
      <Path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </G>
  </Svg>
);

export default SvgComponent;
