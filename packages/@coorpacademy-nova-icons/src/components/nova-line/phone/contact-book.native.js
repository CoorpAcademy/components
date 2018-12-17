import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 4c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v16c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2v-6h4V4h-4zm-1.998 16H4V4h12l.002 16zM20 12h-2v-2h2v2zm-2-4V6h2v2h-2z" />
      <Path d="M8.88 8.167l.726.727a.53.53 0 0 0 .748 0L11.846 7.4a.528.528 0 0 0 0-.746l-1.492-1.492a.53.53 0 0 0-.748 0L7.743 7.028l.01.01a6.591 6.591 0 0 0 0 8.934l-.01.01 1.863 1.864a.53.53 0 0 0 .748 0l1.492-1.492a.528.528 0 0 0 0-.746l-1.492-1.492a.528.528 0 0 0-.748 0l-.726.726a4.995 4.995 0 0 1 0-6.675z" />
    </G>
  </Svg>
);

export default SvgComponent;
