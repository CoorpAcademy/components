import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2.001c-5.514 0-10 4.485-10 10 0 5.514 4.486 10 10 10s10-4.486 10-10-4.486-10-10-10zm0 18c-4.411 0-8-3.59-8-8 0-4.412 3.589-8 8-8s8 3.588 8 8c0 4.411-3.589 8-8 8z" />
      <Path d="M13 14.587V6.001h-2v8.586l-2.293-2.293-1.414 1.414L12 18.416l4.707-4.708-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
