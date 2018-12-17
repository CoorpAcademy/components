import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Path d="M16.5 11a2.503 2.503 0 0 0-2.5 2.5V15h-1v2h1v2h-1v2h6v-2h-3v-2h2v-2h-2v-1.5a.5.5 0 0 1 1 0v.5h2v-.5c0-1.378-1.121-2.5-2.5-2.5zM8 11H7V7h4v1h2V7h4.769C16.855 2.998 13.274 0 9 0 4.038 0 0 4.038 0 9c0 4.274 2.998 7.856 7 8.769V13h1v-2zm5-7.736A7.018 7.018 0 0 1 14.736 5H13V3.264zm-6-.969C7.635 2.106 8.305 2 9 2s1.366.106 2 .295V5H7V2.295zM5 14.736A7.056 7.056 0 0 1 3.263 13H5v1.736zM5 11H2.305A6.887 6.887 0 0 1 2 9c0-.695.105-1.365.295-2H5v4zm0-6H3.264A7.018 7.018 0 0 1 5 3.264V5z" />
    </G>
  </Svg>
);

export default SvgComponent;
