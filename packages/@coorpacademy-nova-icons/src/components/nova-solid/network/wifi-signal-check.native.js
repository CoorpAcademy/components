import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.607 12.998c-1.654 0-3 1.345-3 3 0 1.654 1.346 3 3 3s3-1.346 3-3c0-1.655-1.345-3-3-3zm0 4a1.001 1.001 0 1 1 1-1c0 .551-.449 1-1 1zM15.85 11.755l1.414-1.414c-1.511-1.511-3.52-2.343-5.656-2.343s-4.147.832-5.657 2.343l1.414 1.414a5.955 5.955 0 0 1 4.242-1.757c1.602 0 3.11.623 4.243 1.757zM21.507 6.098l1.414-1.414A15.895 15.895 0 0 0 11.606-.004 15.889 15.889 0 0 0 .293 4.684l1.414 1.414a13.908 13.908 0 0 1 9.899-4.102 13.91 13.91 0 0 1 9.901 4.102z" />
      <Path d="M18.678 8.926l1.414-1.414c-4.679-4.679-12.291-4.678-16.97 0l1.414 1.413c3.9-3.898 10.243-3.898 14.142.001zM22.293 16.29L18 20.583l-2.293-2.293-1.414 1.414L18 23.411l5.707-5.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
