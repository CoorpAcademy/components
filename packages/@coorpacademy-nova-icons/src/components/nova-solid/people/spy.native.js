import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.781 8l-1.073-4.29L12 4.945 8.292 3.71 7.219 8H5v2h2c0 2.757 2.243 5 5 5s5-2.243 5-5h2V8h-2.219zM10 11a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1zm4 0a1 1 0 0 1-1-1h2a1 1 0 0 1-1 1zM4 22v2h7v-6.135l-4.934-4.111-3.621 2.414 1.109 1.664 2.379-1.586 1.123.936C5.127 18.261 4 19.979 4 22zM20.445 17.832l1.109-1.664-3.621-2.414L13 17.865V24h7v-2c0-2.02-1.127-3.739-3.056-4.818l1.122-.936 2.379 1.586z" />
    </G>
  </Svg>
);

export default SvgComponent;
