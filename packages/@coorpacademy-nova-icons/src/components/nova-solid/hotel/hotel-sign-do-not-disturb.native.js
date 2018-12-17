import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 13.75A3.254 3.254 0 0 0 8.75 17c0 .624.186 1.202.492 1.699l4.456-4.457A3.222 3.222 0 0 0 12 13.75zM10.302 19.759A3.222 3.222 0 0 0 12 20.25 3.254 3.254 0 0 0 15.25 17c0-.624-.186-1.202-.492-1.697l-4.456 4.456z" />
      <Path d="M12 0C8.69 0 6 2.69 6 6h2c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4h-.5C8.46 10 6 12.46 6 15.5V24h12V6c0-3.31-2.69-6-6-6zm0 21.75c-2.619 0-4.75-2.131-4.75-4.75s2.131-4.75 4.75-4.75 4.75 2.131 4.75 4.75-2.131 4.75-4.75 4.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
