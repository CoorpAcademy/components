import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Circle cx={11} cy={16} r={1.5} />
      <Path d="M17 5v5h-1V2h-2v6h-2V0h-2v8H8V2H6v8H5V5H3v11c0 4.411 3.589 8 8 8s8-3.589 8-8V5h-2zM7 12a1 1 0 0 0 1-1v-1h6v1a1 1 0 0 0 1 1h2v4c0-.21-.066-.42-.199-.597C16.698 15.263 14.226 12 11 12s-5.698 3.263-5.801 3.402A.995.995 0 0 0 5 16v-4h2zm7.676 3.998C13.942 16.765 12.523 18 11 18c-1.534 0-2.945-1.231-3.676-1.998C8.058 15.235 9.477 14 11 14c1.534 0 2.945 1.231 3.676 1.998zM11 22a6.007 6.007 0 0 1-6-5.998c0 .209.066.419.199.596C5.302 16.737 7.774 20 11 20s5.698-3.263 5.801-3.402a.991.991 0 0 0 .199-.596A6.007 6.007 0 0 1 11 22z" />
    </G>
  </Svg>
);

export default SvgComponent;
