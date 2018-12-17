import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22 2.999H2c-1.103 0-2 .897-2 2v3c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-3c0-1.103-.897-2-2-2zm-20 5v-3h20l.001 3H2zM7 10.999H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 9H4v-7h2v7zM14 10.999h-4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 9h-2v-7h2v7zM21 10.999h-4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1zm-1 9h-2v-7h2v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
