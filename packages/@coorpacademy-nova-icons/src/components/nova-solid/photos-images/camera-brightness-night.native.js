import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.707 11.294L19 8.587V6.001a1 1 0 0 0-1-1h-2.586l-2.707-2.707a.999.999 0 0 0-1.414 0L8.586 5.001H6a1 1 0 0 0-1 1v2.586l-2.707 2.707a.999.999 0 0 0 0 1.414L5 15.415V18a1 1 0 0 0 1 1h2.586l2.707 2.708a1 1 0 0 0 1.414 0L15.414 19H18a1 1 0 0 0 1-1v-2.585l2.707-2.707a.999.999 0 0 0 0-1.414zM12 17c2.667-3.332 2.667-6.667 0-10a5 5 0 1 1 0 10z"
    />
  </Svg>
);

export default SvgComponent;
