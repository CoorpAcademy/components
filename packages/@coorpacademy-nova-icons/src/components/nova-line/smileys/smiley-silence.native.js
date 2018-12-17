import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M8 8h2v3H8zM14 8h2v3h-2zM13.47 12.47L12 13.94l-1.47-1.47-1.06 1.061L10.939 15 9.47 16.47l1.06 1.061 1.47-1.47 1.47 1.47 1.06-1.061L13.061 15l1.469-1.469z" />
    </G>
  </Svg>
);

export default SvgComponent;
