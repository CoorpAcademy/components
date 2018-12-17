import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24H0z" />
    <G fill="currentColor">
      <Path d="M10.707 7.707L12 6.414l1.293 1.293 1.414-1.414L13.414 5l1.293-1.293-1.414-1.414L12 3.586l-1.293-1.293-1.414 1.414L10.586 5 9.293 6.293zM18.895 20.553l-1.753-3.506L7.236 22H18c.347 0 .668-.18.851-.474.182-.296.198-.663.044-.973zM12.894 8.553c-.339-.678-1.45-.678-1.789 0L8.48 13.804l5.76-2.56-1.346-2.691zM15.135 13.035l-8.062 3.582-2.057 4.258 11.231-5.617z" />
    </G>
  </Svg>
);

export default SvgComponent;
