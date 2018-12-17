import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M22.882 18.528A1 1 0 0 0 22 18h-4.356A8.981 8.981 0 0 0 21 11c0-4.962-4.038-9-9-9s-9 4.038-9 9a8.981 8.981 0 0 0 3.356 7H2a1 1 0 0 0-.832 1.554l1.406 2.109A2.994 2.994 0 0 0 5.07 23h13.86c1.005 0 1.938-.5 2.496-1.336l1.406-2.109a1 1 0 0 0 .05-1.027zM5 11c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7-7-3.14-7-7zm14.762 9.555a.998.998 0 0 1-.832.445H5.07a.998.998 0 0 1-.832-.445L3.869 20h16.263l-.37.555z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
