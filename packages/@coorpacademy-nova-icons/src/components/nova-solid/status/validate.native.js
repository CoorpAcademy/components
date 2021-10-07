import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg data-name="Calque 1" viewBox="0 0 24 21.45" {...props}>
    <Path
      fill={props.color}
      d="M0 13.79l10.21 7.66L24 3.06 19.91 0 9.19 14.3 3.06 9.7z"
    />
  </Svg>
);

export default SvgComponent;
