import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 11v6h5v-6h-5zm4 4h-2v-2h2v2zM9 1C4.59 1 1 4.59 1 9c0 3.721 2.55 6.85 6 7.75.64.161 1.31.25 2 .25h1v-6H9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2v14h6V9c0-1.45-.39-2.82-1.08-4C14.54 2.61 11.95 1 9 1zM7.848 12.832l-.575 1.916A6.02 6.02 0 0 1 3.6 11.62l1.799-.875a4.013 4.013 0 0 0 2.449 2.087zm-2.57-5.301l-1.86-.736a6.021 6.021 0 0 1 3.427-3.396l.718 1.866a4.012 4.012 0 0 0-2.285 2.266zm5.498-2.116l.89-1.791a6.024 6.024 0 0 1 3.097 3.701l-1.921.558a4.012 4.012 0 0 0-2.066-2.468zM15 21h-2v-3h2v3zm0-6h-2v-4h2v4z" />
    </G>
  </Svg>
);

export default SvgComponent;
