import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <Path
      fill="currentColor"
      d="M17.196 14.02L13 13.181V9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v5H7a1.001 1.001 0 0 0-.895 1.448l3 6A1 1 0 0 0 10 22h7a1 1 0 0 0 1-1v-6a1 1 0 0 0-.804-.98z"
    />
    <G fill="currentColor">
      <Path d="M4 8h3v2H4zM6.757 3.344L8.88 5.465 7.465 6.88 5.343 4.76zM10 2h2v3h-2zM16.656 4.758L14.535 6.88 13.12 5.465l2.121-2.12zM15 8h3v2h-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
