import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6H2C.897 6 0 6.898 0 8v9c0 1.103.897 2 2 2h20c1.104 0 2-.897 2-2V8c0-1.102-.896-2-2-2zM2 17V8h20l.002 9H2z" />
      <Path d="M6.75 11.751h-1.5v-2.25h-1.5v6h1.5v-2.25h1.5v2.25h1.5v-6h-1.5zM13.893 13.352v-1.54a2.313 2.313 0 0 0-4.623 0v1.54a2.314 2.314 0 0 0 2.311 2.312c.356 0 .689-.087.99-.231l.776.776 1.089-1.089-.776-.777c.145-.302.233-.635.233-.991zm-1.541 0a.772.772 0 0 1-1.542 0v-1.54a.772.772 0 0 1 1.542 0v1.54zM18.5 9.501l-.925 1.542-.925-1.542H14.9l1.801 3-1.801 3h1.75l.925-1.542.925 1.542h1.75l-1.801-3 1.801-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
