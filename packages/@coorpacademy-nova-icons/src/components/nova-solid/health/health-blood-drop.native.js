import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <Path
      fill="currentColor"
      d="M12.836 2.452a1 1 0 0 0-1.658-.02C10.545 3.347 5 11.476 5 15c0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.276-4.7-10.407-6.164-12.548zM11 17v2c-1.654 0-3-1.346-3-3 0-1.248 1.615-4.492 2.11-5.456l1.779.913c-.904 1.763-1.88 4.009-1.89 4.544.001.55.45.999 1.001.999z"
    />
  </Svg>
);

export default SvgComponent;
