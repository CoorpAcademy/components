import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 11.001H6v-3H4v8h2v-3h1v3h2v-8H7zM16 8.001v2h1v6h2v-6h1v-2zM13 8.001h-1c-1.104 0-2 .897-2 2v4c0 1.103.896 2 2 2h1c1.104 0 2-.897 2-2v-4c0-1.103-.896-2-2-2zm-.003 6H12v-4h1l-.003 4z" />
      <Path d="M12 .001c-6.617 0-12 5.383-12 12s5.383 12 12 12 12-5.383 12-12-5.383-12-12-12zm0 22c-5.514 0-10-4.485-10-10 0-5.514 4.486-10 10-10s10 4.486 10 10c0 5.515-4.486 10-10 10z" />
    </G>
  </Svg>
);

export default SvgComponent;
