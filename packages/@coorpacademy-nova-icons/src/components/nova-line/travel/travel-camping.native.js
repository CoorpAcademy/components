import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M21.854 20.479L13.672 7.091l2.182-3.569-1.707-1.043L12.5 5.173l-1.646-2.695-1.708 1.043 2.182 3.569-8.182 13.389a1.002 1.002 0 0 0-.019 1.011c.178.315.511.51.873.51h17a.999.999 0 0 0 .854-1.521zM11 20v-1.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5V20h-3zm5 0v-1.5c0-1.931-1.57-3.5-3.5-3.5S9 16.569 9 18.5V20H5.783L12.5 9.009 19.217 20H16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
