import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M21.973 9.886c-.04-.337-.914-2.871-1.023-3.2a1.002 1.002 0 0 0-1.899.633l.563 1.685h-.936l-1.749-4.372A1 1 0 0 0 16 4.003H8a1 1 0 0 0-.929.629L5.322 9.003h-.935l.563-1.685a1 1 0 1 0-1.899-.632c-.109.329-.983 2.863-1.023 3.2-.046.381 1.917 9.938 1.992 10.313a1 1 0 0 0 .98.804h14a.998.998 0 0 0 .98-.804c.076-.376 2.039-9.932 1.993-10.313zM8.678 6.002h6.645l1.201 3.001H7.477l1.201-3.001zm9.502 13.001H5.82l-1.601-8H19.78l-1.6 8z" />
      <Path d="M13 12.003h-2v2H9v2h2v2h2v-2h2v-2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
