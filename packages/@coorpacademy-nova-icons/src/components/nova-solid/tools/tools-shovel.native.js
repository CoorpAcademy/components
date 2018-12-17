import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M23 15.026l-5-5-3.293 3.293L7 5.612V1.026A1.002 1.002 0 0 0 5.293.319l-5 5A.999.999 0 1 0 1 7.026h4.586l7.707 7.708L10 18.026l5 5c1.562 1.566 7 1 8 0s1.562-6.434 0-8zm-18-10H3.414L5 3.44v1.586z"
    />
  </Svg>
);

export default SvgComponent;
