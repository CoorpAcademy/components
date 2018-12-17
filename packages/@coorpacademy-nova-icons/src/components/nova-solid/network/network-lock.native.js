import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.354V5h3.646A10.03 10.03 0 0 0 15 1.354zM7 .461V5h6V.461C12.053.162 11.045 0 10 0S7.947.162 7 .461zM19.953 9.069A9.906 9.906 0 0 0 19.539 7H15v3.257a6.964 6.964 0 0 1 4-1.259c.324 0 .641.029.953.071zM7 13h5.682c.097-.204.203-.402.318-.596V7H7v6zM5 18.646V15H1.354A10.022 10.022 0 0 0 5 18.646zM1.354 5H5V1.354A10.03 10.03 0 0 0 1.354 5zM7 19.54a9.98 9.98 0 0 0 5 .259v-3.801c0-.339.032-.67.079-.998H7v4.54zM0 10a9.95 9.95 0 0 0 .461 3H5V7H.461A9.95 9.95 0 0 0 0 10zM22.999 14.998c0-2.207-1.794-4-4-4s-4 1.793-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7c0-.554-.447-1-1-1zm-4-2c1.103 0 2 .897 2 2h-4c0-1.104.897-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={18.998} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
