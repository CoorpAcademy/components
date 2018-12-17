import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.268 3.27l-17 17 1.414 1.414 4.967-4.967 3.619 3.967a.996.996 0 0 0 1.09.216.998.998 0 0 0 .617-.923v-8.586l6.707-6.707-1.414-1.414zM14.975 5.735V3.977a.999.999 0 0 0-1.707-.707L8.975 7.977h-3c-.55 0-1 .45-1 1v6c0 .212.082.399.196.561l9.804-9.803z" />
    </G>
  </Svg>
);

export default SvgComponent;
