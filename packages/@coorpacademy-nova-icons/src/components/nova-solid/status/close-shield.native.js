import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.527 5.127l-9-5a1 1 0 0 0-.972 0l-9 5a.998.998 0 0 0-.513.874c0 .694.114 17 10 17s10-16.306 10-17a.998.998 0 0 0-.515-.874zm-4.738 10.209l-1.495 1.328-3.252-3.659-3.252 3.659-1.495-1.328 3.41-3.836-3.41-3.836L8.79 6.336l3.252 3.659 3.252-3.659 1.495 1.328-3.41 3.836 3.41 3.836z"
    />
  </Svg>
);

export default SvgComponent;
