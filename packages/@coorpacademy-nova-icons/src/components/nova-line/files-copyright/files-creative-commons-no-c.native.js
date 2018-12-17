import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 2.008h10v3.981h6V4.594L13.414.009H2c-1.103 0-2 .896-2 2v18c0 1.102.897 2 2 2h5v-2H2V2.008zM14.51 12.389L16.121 14H18v-2h-2c-.545 0-1.049.148-1.49.389zM16 20h1.879l-2.024-2.024c-.48-.062-.855-.393-.855-.809v-.046l-2-2v2.046C13 18.729 14.346 20 16 20z" />
      <Path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6 0-1.294.416-2.49 1.115-3.472l8.356 8.357A5.961 5.961 0 0 1 16 22zm4.885-2.529l-8.356-8.356A5.961 5.961 0 0 1 16 10c3.309 0 6 2.691 6 6a5.959 5.959 0 0 1-1.115 3.471z" />
    </G>
  </Svg>
);

export default SvgComponent;
