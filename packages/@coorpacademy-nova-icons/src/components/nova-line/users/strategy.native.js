import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14.001 2v2h4.586L3.294 19.293l1.414 1.414L20.001 5.414V10h2V2zM3.708 9.707l2.293-2.293 2.293 2.293 1.414-1.414L7.415 6l2.293-2.293-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414L4.587 6 2.294 8.293z" />
      <Path d="M17.501 13c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5 4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm0 7c-1.378 0-2.5-1.121-2.5-2.5s1.122-2.5 2.5-2.5 2.5 1.121 2.5 2.5-1.122 2.5-2.5 2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
