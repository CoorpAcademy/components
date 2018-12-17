import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.487 7.127l-9-5a1.007 1.007 0 0 0-.973 0l-9 5a1 1 0 0 0-.442 1.245l2 5c.152.38.521.629.929.629h14c.408 0 .776-.249.929-.629l2-5c.186-.467-.004-1-.443-1.245zm-3.164 4.874H5.678L4.256 8.447 12 4.145l7.744 4.303-1.421 3.553z" />
      <Circle cx={12} cy={8.001} r={2} />
      <Path d="M19 15.001H5a1.002 1.002 0 0 0-.927 1.376C5.607 20.161 8.2 22.001 12 22.001s6.393-1.84 7.927-5.624A1 1 0 0 0 19 15.001zm-7 5c-2.478 0-4.191-.937-5.403-3h10.807c-1.212 2.063-2.926 3-5.404 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
