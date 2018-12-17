import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21 17v-3a2 2 0 0 0-2-2H5c-1.103 0-2 .896-2 2v3h18zm-4.5-3.5a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM21 19H3v3c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-3zm-7.5 3.5a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM14.1 0c-1.634 0-3.092.816-3.986 2.105 1.115.365 1.949 1.491 2.158 1.98-.014.011-.82.593-.85.613C10.375 3.182 9.475 2.857 8.5 2.857 6.57 2.857 5 4.46 5 6.429 5 8.399 6.57 10 8.5 10h5.6c2.702 0 4.9-2.242 4.9-5 0-2.757-2.198-5-4.9-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
