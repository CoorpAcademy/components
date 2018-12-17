import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M12.625 2.219a1.001 1.001 0 0 0-1.25 0l-5 4C6.139 6.409 6 6.696 6 7v10c0 .304.139.591.375.781l5 4a1.002 1.002 0 0 0 1.25 0l5-4c.236-.19.375-.477.375-.781V7c0-.304-.139-.591-.375-.781l-5-4zM11 8.234L8.748 6.882 11 5.082v3.152zm2-3.152l2.252 1.801L13 8.234V5.082zM8 8.766l3 1.8v8.353l-3-2.4V8.766zm5 10.153v-8.353l3-1.8v7.753l-3 2.4zM19 11h3v2h-3zM20.292 2.293l1.414 1.414-2 2-1.413-1.414zM20.293 21.707l-2-2 1.414-1.413 2 2zM2 11h3v2H2zM4.293 5.707l-2-2 1.414-1.413 2 2zM3.708 21.707l-1.414-1.413 2-2 1.413 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
