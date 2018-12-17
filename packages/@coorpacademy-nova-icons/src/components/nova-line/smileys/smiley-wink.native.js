import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 11.5c.965 0 1.75-.785 1.75-1.75S9.965 8 9 8s-1.75.785-1.75 1.75S8.035 11.5 9 11.5zm0-2a.25.25 0 0 1 .25.25c0 .276-.5.276-.5 0A.25.25 0 0 1 9 9.5z" />
      <Path d="M12 2C6.486 2 2 6.486 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
      <Path d="M12 16a3.972 3.972 0 0 1-3.199-1.598l-1.598 1.204A5.958 5.958 0 0 0 12 18a5.955 5.955 0 0 0 4.8-2.398L15.2 14.4A3.968 3.968 0 0 1 12 16zM13 9h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
