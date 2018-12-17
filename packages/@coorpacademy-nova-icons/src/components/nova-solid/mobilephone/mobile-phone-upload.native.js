import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.005h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10-.001H2c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h8c1.103 0 2-.896 2-2v-16c0-1.103-.897-2-2-2zm0 16H2v-12h8v12zM23.707 19.291L19 14.584l-4.707 4.707 1.414 1.414L18 18.412v5.587h2v-5.587l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
