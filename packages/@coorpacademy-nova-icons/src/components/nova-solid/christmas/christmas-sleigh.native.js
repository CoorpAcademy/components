import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 16a2.996 2.996 0 0 1-2.467 2.945L16.366 17h-2.333l1.201 2H7.766l1.201-2H6.634l-1.2 2H2v2h15c2.757 0 5-2.243 5-5h-2zM2.256 6H7c.379 0 .725.214.894.553L9.618 10H16v2H9a.998.998 0 0 1-.894-.553L6.382 8H2.855l2.186 7.287c.128.424.518.713.959.713h10c2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4h-4.382L9.894 4.553A.998.998 0 0 0 9 4H3c-.316 0-.613.15-.803.402a1.003 1.003 0 0 0-.155.885L2.256 6z" />
    </G>
  </Svg>
);

export default SvgComponent;
