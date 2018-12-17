import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 17v2h2v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2h2v-2H3zM21.091 5.486l-1.8-3A1 1 0 0 0 18.434 2H5.566a1 1 0 0 0-.857.486l-1.8 3A1 1 0 0 0 3.766 7H5v9h2V7h4v3h-.78a1.001 1.001 0 0 0-.98 1.197l.6 3a.998.998 0 0 0 .98.803h2.36a.998.998 0 0 0 .98-.804l.6-3A1 1 0 0 0 13.78 10H13V7h4v9h2V7h1.234a.998.998 0 0 0 .857-1.514z" />
    </G>
  </Svg>
);

export default SvgComponent;
