import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 18.5a1.5 1.5 0 0 0 3 0v-5.306a.752.752 0 0 0-.983-.712l-5 1.631a.747.747 0 0 0-.517.712V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.142V17A1.5 1.5 0 0 0 9 18.5z" />
      <Path d="M14 22H2V11h7V9H2c-1.103 0-2 .897-2 2v11c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2v-9h-2v9z" />
      <Path d="M19 9h-1.52l-1.2-1.5 1.2-1.5H19v1l3-2-3-2v1h-2.48L15 5.899 13.48 4H11v2h1.52l1.2 1.5-1.2 1.5H11v2h2.48L15 9.1l1.52 1.9H19v1l3-2-3-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
