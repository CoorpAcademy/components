import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M22.664 16.035A15.965 15.965 0 0 0 18.09 13.2l1.367-2.785c.435-1.058-.96-1.898-1.693-1.02l-2.13 3.029A15.99 15.99 0 0 0 12.04 12a15.971 15.971 0 0 0-10.605 4.02l1.326 1.496A13.973 13.973 0 0 1 12.04 14c.79 0 1.572.075 2.341.204l-4.054 5.763a2 2 0 1 0 3.426 2.065l3.456-7.036c1.5.596 2.9 1.444 4.127 2.535l1.328-1.496zM13 7h3V5h-3V4h4V2h-4c-1.103 0-2 .897-2 2v6h2V7z" />
    </G>
  </Svg>
);

export default SvgComponent;
