import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16.773 5h-.359l1.293-1.294-1.414-1.412L12.586 6l3.707 3.706 1.414-1.412L16.414 7h.359C20 7 20 9.258 20 10v1h2v-1c0-3.131-1.954-5-5.227-5zM4 4h5v6h2V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h2v-2H4V4z" />
      <Path d="M20 12H10c-1.103 0-2 .898-2 2v6c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-6c0-1.102-.897-2-2-2zm-10 8v-6h10l.001 6H10z" />
    </G>
  </Svg>
);

export default SvgComponent;
