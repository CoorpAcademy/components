import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.004H5c-1.103 0-2 .898-2 2v5h2v-5h10v4h4v1h2V5.59l-4.586-4.586zM19 21.004H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM5 16.004h2v2h2v-7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v7h2v-2zm0-4h2v2H5v-2zM13.942 10.004l-.957 3.901L12 10.004h-2l1.963 8h2.058L14 17.923l2-7.919zM17 12.004h1v4h-1v2h4v-2h-1v-4h1v-2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
