import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.707 11.294l-6-6A.997.997 0 0 0 16 5.001H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a.997.997 0 0 0 .707-.293l6-6a.999.999 0 0 0 0-1.414zm-10 3l-1.414 1.414L9 13.415l-2.293 2.293-1.414-1.414 2.293-2.293-2.293-2.293 1.414-1.414L9 10.587l2.293-2.293 1.414 1.414-2.293 2.293 2.293 2.293z"
    />
  </Svg>
);

export default SvgComponent;
