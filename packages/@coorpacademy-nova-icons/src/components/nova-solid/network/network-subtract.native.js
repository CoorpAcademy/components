import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 1.354V5h3.646A10.03 10.03 0 0 0 15 1.354zM20 10a9.95 9.95 0 0 0-.461-3H15v6h4.539A9.95 9.95 0 0 0 20 10zM7 7h6v6H7zM18.646 15H15v3.646c.086-.05.172-.102.256-.155a4.975 4.975 0 0 1 3.236-3.237c.053-.084.106-.168.154-.254zM7 19.54c.947.298 1.955.46 3 .46s2.053-.162 3-.46V15H7v4.54zM0 10a9.95 9.95 0 0 0 .461 3H5V7H.461A9.95 9.95 0 0 0 0 10zM7 .461V5h6V.461C12.053.162 11.045 0 10 0S7.947.162 7 .461zM5 18.646V15H1.354A10.022 10.022 0 0 0 5 18.646zM1.354 5H5V1.354A10.03 10.03 0 0 0 1.354 5zM17 18.998h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
