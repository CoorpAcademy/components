import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.003 18.951a2.5 2.5 0 1 1-.003-4.9V7.614l5.265 1.755-.58 1.739A8.954 8.954 0 0 1 18 10.065V4.59L13.414.004H2c-1.103 0-2 .898-2 2v18c0 1.102.897 2 2 2h6.522A8.963 8.963 0 0 1 8 19.007c0-.019.003-.038.003-.056zM12 1.004l5 5h-5v-5z" />
      <Path d="M12.499 11.221L10 10.389v2.967a8.994 8.994 0 0 1 2.499-2.135zM17.707 12.301a1 1 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.422v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.292 1.414-1.414-6-5.999zM18 22.008h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
