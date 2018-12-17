import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.485 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
    />
    <Path
      fill="currentColor"
      d="M12 11.162l4.629-2.315A1.991 1.991 0 0 0 15 7.999H9c-.674 0-1.267.336-1.629.847L12 11.162z"
    />
    <Path
      fill="currentColor"
      d="M12.335 12.67a.744.744 0 0 1-.67.001L7 10.338V14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3.661l-4.665 2.331z"
    />
  </Svg>
);

export default SvgComponent;
