import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M7 8h4v2H7zM13 8h4v2h-4zM12 13a7.96 7.96 0 0 0-5.584 2.271l1.396 1.433A5.969 5.969 0 0 1 12 15c1.604 0 3.11.624 4.242 1.757l1.415-1.414A7.944 7.944 0 0 0 12 13z" />
    </G>
  </Svg>
);

export default SvgComponent;
