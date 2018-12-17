import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M3 13.999v6c0 1.103.897 2 2 2h6v-8H3zM13 13.999v8h6c1.104 0 2-.897 2-2v-6h-8zM20 7.999h-3.114a5.028 5.028 0 0 0 1.235-.878 3.006 3.006 0 0 0 0-4.244c-1.135-1.131-3.107-1.132-4.242.001-1.637 1.637-1.857 4.718-1.877 5.064-.002.02.008.037.008.057h-.02c0-.02.01-.037.008-.058-.019-.346-.24-3.427-1.877-5.064-1.135-1.131-3.109-1.131-4.242.002a3.002 3.002 0 0 0 0 4.242c.357.356.784.643 1.235.878H4c-1.103 0-2 .897-2 2v3h9v-4h2v4h9v-3c0-1.103-.896-2-2-2zM7.293 5.707A1.002 1.002 0 0 1 8 4c.268 0 .519.103.707.292.59.59.934 1.648 1.118 2.53-.88-.183-1.946-.529-2.532-1.115zm6.881 1.117c.185-.883.528-1.941 1.119-2.531A.986.986 0 0 1 16 4c.268 0 .519.103.706.291.39.391.391 1.025.001 1.416-.591.591-1.65.935-2.533 1.117z" />
    </G>
  </Svg>
);

export default SvgComponent;
