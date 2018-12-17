import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M12 2.001c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm4.285 15.5L12 14.666l-4.286 2.835 1.994-4.584L6 9.787h4.285L12 5.501l1.714 4.286H18l-3.708 3.13 1.993 4.584z"
    />
  </Svg>
);

export default SvgComponent;
