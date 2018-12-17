import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.998 15H2v-1H0v4c0 1.103.897 2 2 2h9v2H7v2h10v-2h-4v-2h9c1.103 0 2-.897 2-2v-4h-2.002v1zM2 18v-1h19.997v1H2zM22 3H2C.897 3 0 3.897 0 5v1h2V5h20v1h2V5c0-1.103-.897-2-2-2zM5.74 9.927L5.001 7H3.458L2.74 9.925 2.001 7h-1.5l1.473 6h1.543l-.016-.061.739-2.927L4.974 13h1.543l-.016-.061L8.001 7H6.458zM13.24 9.927L12.5 7h-1.542l-.718 2.925L9.501 7h-1.5l1.472 6h1.543l-.015-.061.739-2.927.733 2.988h1.543l-.015-.061L15.5 7h-1.542zM21.457 7l-.718 2.927L20 7h-1.543l-.718 2.925L17 7h-1.5l1.473 6h1.543l-.016-.061.739-2.927.734 2.988h1.543l-.016-.061L23 7z" />
    </G>
  </Svg>
);

export default SvgComponent;
