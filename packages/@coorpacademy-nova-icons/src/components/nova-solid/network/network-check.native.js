import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 15v.535c.215-.193.44-.375.682-.535H15zM15 1.354V5h3.646A10.03 10.03 0 0 0 15 1.354zM20 10a9.95 9.95 0 0 0-.461-3H15v6h4.539A9.95 9.95 0 0 0 20 10zM7 .461V5h6V.461C12.053.162 11.045 0 10 0S7.947.162 7 .461zM7 7h6v6H7zM5 18.646V15H1.354A10.022 10.022 0 0 0 5 18.646zM7 19.54c.947.298 1.955.46 3 .46s2.053-.162 3-.46V15H7v4.54zM1.354 5H5V1.354A10.03 10.03 0 0 0 1.354 5zM0 10a9.95 9.95 0 0 0 .461 3H5V7H.461A9.95 9.95 0 0 0 0 10zM22.293 16.29L18 20.583l-2.293-2.293-1.414 1.414L18 23.411l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
