import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.414 1.004H5c-1.103 0-2 .898-2 2v5h2v-5h10v4h4v1h2V5.59l-4.586-4.586zM19 21.004H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM5 15.004h3v-2H5v-1h4v-2H5c-1.103 0-2 .898-2 2v6h2v-3zM17.985 13.905L17 10.004h-2l1.963 8h2.058L19 17.923l2-7.919h-2.058zM10 10.004v8h5v-2h-3v-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
