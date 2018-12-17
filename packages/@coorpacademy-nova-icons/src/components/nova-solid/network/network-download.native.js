import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.354V5h3.646A10.03 10.03 0 0 0 15 1.354zM7 .461V5h6V.461C12.053.162 11.045 0 10 0S7.947.162 7 .461zM7 7h6v6H7zM19 12.003c.267 0 .528.019.787.047A9.963 9.963 0 0 0 19.539 7H15v6h.412A6.964 6.964 0 0 1 19 12.003zM1.354 5H5V1.354A10.03 10.03 0 0 0 1.354 5zM0 10a9.95 9.95 0 0 0 .461 3H5V7H.461A9.95 9.95 0 0 0 0 10zM7 19.54a9.98 9.98 0 0 0 5.047.248 7.025 7.025 0 0 1-.047-.785c0-1.315.369-2.541 1-3.592V15H7v4.54zM5 18.646V15H1.354A10.03 10.03 0 0 0 5 18.646zM22.293 17.295L20 19.588v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.416l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
