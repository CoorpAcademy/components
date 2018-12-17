import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.001h-24z" />
    <Path
      d="M15.948 21.999l-.95-18.052a1 1 0 0 0-.292-.655l-2-2a1 1 0 0 0-1.414 0l-2 2a1.004 1.004 0 0 0-.291.655l-.95 18.052H5v2h14v-2h-3.052zm-5.894 0l.924-17.564L12 3.414l1.021 1.021.924 17.564h-3.891z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
