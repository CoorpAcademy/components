import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <G fill="currentColor">
      <Path d="M12 2C9.654 2 2 2.217 2 5s7.654 3 10 3 10-.217 10-3-7.654-3-10-3zm3 4H9a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2zM5 9.055V19c0 .266.106.52.293.706C6.829 21.243 9.414 22.01 12 22.01s5.172-.767 6.707-2.304A.992.992 0 0 0 19 19V9.056c-1.972.592-4.385.944-7 .944s-5.028-.352-7-.945zm12 5.565c-1.469.574-3.232.866-5 .866s-3.531-.292-5-.866v-2.191c2.631 1.413 7.369 1.414 10 .002v2.189z" />
    </G>
  </Svg>
);

export default SvgComponent;
