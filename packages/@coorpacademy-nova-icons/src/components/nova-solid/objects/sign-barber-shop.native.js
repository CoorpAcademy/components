import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M15 7.073l-6 3.599v2.251l6-3.6zM15 15.073l-3.209 1.925H15zM9 16.923l6-3.6v-2.25l-6 3.599zM9 8.923L12.209 7H9zM15 2H9a1 1 0 0 0-1 1v1.998a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM15 18H9a1 1 0 0 0-1 1v2.002a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
