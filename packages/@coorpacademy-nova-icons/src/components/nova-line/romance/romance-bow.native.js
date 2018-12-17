import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24H0z" />
    <Path
      d="M21.706 11.291l-3-3-1.414 1.415 1.293 1.292H5.413l4.964-4.962c2.005.182 3.683 1.774 4.331 3.962h2.061c-.78-3.445-3.515-6-6.77-6a2 2 0 0 1-2-2h-2c0 1.512.853 2.814 2.092 3.495l-5.799 5.798a1 1 0 0 0 0 1.415l5.799 5.798c-1.239.682-2.092 1.982-2.092 3.494h2c0-1.103.896-2 2-2 3.255 0 5.989-2.554 6.77-6h-2.061c-.648 2.19-2.326 3.782-4.331 3.964l-4.964-4.964h13.172l-1.293 1.293 1.414 1.415 3-3a1 1 0 0 0 0-1.415z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
