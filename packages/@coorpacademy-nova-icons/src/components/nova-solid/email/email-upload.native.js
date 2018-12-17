import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 16.77l6.555-4.683A1.994 1.994 0 0 0 14 12H2c-.194 0-.378.036-.555.088L8 16.77z" />
      <Path d="M8.581 18.813a1 1 0 0 1-1.162 0l-7.365-5.26A2.056 2.056 0 0 0 0 14v8c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2v-8c0-.153-.021-.303-.054-.446l-7.365 5.259zM23.707 5.292L19 .585l-4.707 4.707 1.414 1.414L18 4.413V10h2V4.413l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
