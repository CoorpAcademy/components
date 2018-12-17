import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M21.706 20.291l-5.396-5.395a7.95 7.95 0 0 0 1.688-4.898c0-4.411-3.589-8-8-8s-8 3.589-8 8c0 4.412 3.589 8 8 8a7.946 7.946 0 0 0 4.897-1.688l5.396 5.396 1.415-1.415zM9.999 15.998c-3.309 0-6-2.691-6-6 0-3.308 2.691-6 6-6s6 2.692 6 6c0 3.309-2.691 6-6 6z" />
      <Path d="M11.499 6.998a1.5 1.5 0 0 0-1.5 1.5 1.5 1.5 0 0 0-3 0c0 1.5 3 4.5 3 4.5s3-3 3-4.5a1.5 1.5 0 0 0-1.5-1.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
