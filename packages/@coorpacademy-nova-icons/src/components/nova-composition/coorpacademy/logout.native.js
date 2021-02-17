import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = (props) => (
  <Svg viewBox="0 0 18.1 18" {...props}>
    <Path stroke={props.color} d="M1 9h10.9M9 6.1L11.9 9 9 11.9" />
    <Path
      stroke={props.color}
      d="M1.7 5.7C3 2.9 5.8 1 9 1c4.4 0 8 3.6 8 8s-3.6 8-8 8c-3.3 0-6.1-1.9-7.3-4.7"
    />
  </Svg>
);

export default SvgComponent;
