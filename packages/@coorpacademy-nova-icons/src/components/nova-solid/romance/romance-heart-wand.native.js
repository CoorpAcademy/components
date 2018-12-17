import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M20.734 6.342c-.5-.5-1.229-.797-2.013-.821-.024-.749-.297-1.488-.815-2.007-1.656-1.656-4.028-1.629-5.657-.001-2.144 2.146-1.405 7.944-.905 8.945.137.328.437.56.789.608 1.667.223 6.356 1.178 8.602-1.069 1.621-1.62 1.748-3.907-.001-5.655zM3.957 21.704L2.543 20.29l7.001-6.998 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
