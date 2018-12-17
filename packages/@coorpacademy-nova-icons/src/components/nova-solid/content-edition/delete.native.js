import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.739 5.677l-6.324 6.324 6.323 6.323A9.95 9.95 0 0 0 22 12c0-2.398-.85-4.598-2.261-6.323zM12.001 10.587l6.324-6.324A9.947 9.947 0 0 0 12 2c-2.398 0-4.6.85-6.324 2.262l6.325 6.325zM10.587 12.001L4.262 5.677A9.945 9.945 0 0 0 2 12c0 2.398.85 4.6 2.262 6.325l6.325-6.324zM12.001 13.415l-6.325 6.324C7.401 21.15 9.602 22 12 22s4.6-.85 6.324-2.261l-6.323-6.324z" />
    </G>
  </Svg>
);

export default SvgComponent;
