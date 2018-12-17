import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M16.949 5.687A1 1 0 0 0 16 5.003H8a1 1 0 0 0-.949.684l-1.438 4.317h12.775l-1.439-4.317zM19.279 10.004h2.108l-.438-1.316a1.002 1.002 0 0 0-1.899.633l.229.683zM4.949 9.32a1.001 1.001 0 0 0-1.898-.632l-.439 1.316H4.72l.229-.684zM21.788 11.389a.994.994 0 0 0-.788-.385H3a1.002 1.002 0 0 0-.971 1.242l2 8c.112.446.512.758.971.758h14c.459 0 .859-.312.971-.757l2-8a1 1 0 0 0-.183-.858zM15 17.004h-2v2h-2v-2H9v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
