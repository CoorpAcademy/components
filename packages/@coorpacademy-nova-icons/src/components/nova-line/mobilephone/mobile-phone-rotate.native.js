import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 5.596V6h-2l3 4 3-4h-2v-.404C22 2.934 19.897 1 17 1h-1v2h1c1.445 0 3 .813 3 2.596zM4 18.404V18h2l-3-4-3 4h2v.404C2 21.066 4.103 23 7 23h1v-2H7c-1.445 0-3-.812-3-2.596zM11.071 2.955c-.756-.756-2.072-.756-2.828 0L2.586 8.613a2.001 2.001 0 0 0 0 2.828L13.9 22.754c.378.379.88.586 1.414.586s1.036-.207 1.414-.586l5.657-5.656a2.003 2.003 0 0 0 0-2.828L11.071 2.955zm4.243 18.385L4 10.027l5.657-5.658L20.97 15.683l-5.656 5.657z" />
    </G>
  </Svg>
);

export default SvgComponent;
