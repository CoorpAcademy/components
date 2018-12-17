import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M13 4.367V11h3.906c-.435-2.484-2.3-5.593-3.906-6.633zM11 4.367C9.394 5.407 7.529 8.516 7.094 11H11V4.367zM21 12H3a1 1 0 0 0-.707 1.706L5 16.414V18c0 1.103.897 2 2 2h10c1.104 0 2-.897 2-2v-4h1v5h2v-6a1 1 0 0 0-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
