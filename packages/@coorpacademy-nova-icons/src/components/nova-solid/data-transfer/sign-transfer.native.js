import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <Path
      fill="currentColor"
      d="M23.707 11.294l-11-11a.999.999 0 0 0-1.414 0l-11 11a.999.999 0 0 0 0 1.414l11 11a.997.997 0 0 0 1.414 0l11-11a.999.999 0 0 0 0-1.414zm-8.414 2l1.414 1.414L12 19.415l-4.707-4.707 1.414-1.414L11 15.587V8.415l-2.293 2.293-1.414-1.414L12 4.587l4.707 4.707-1.414 1.414L13 8.415v7.172l2.293-2.293z"
    />
  </Svg>
);

export default SvgComponent;
