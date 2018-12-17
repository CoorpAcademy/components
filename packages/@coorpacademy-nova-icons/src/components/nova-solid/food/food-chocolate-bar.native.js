import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22.968 7.879l-2.608-3a1 1 0 0 0-1.462-.051l-2.56 2.561 4.218 4.218 2.364-2.364c.372-.372.392-.968.048-1.364zM16.849 15.312l-3.536-3.537 2.293-2.293 3.536 3.537zM15.273 6.989L12.28 4.261a.999.999 0 0 0-1.381.031L8.364 6.828l3.535 3.535 3.374-3.374zM6.657 7.121L1 12.778a2.003 2.003 0 0 0 0 2.828l7.071 7.071c.779.78 2.049.78 2.828 0l5.657-5.656-9.899-9.9zM9.485 18.07l-2.121-9 7.242 7.244s-2.292-1.072-5.121 1.756z" />
    </G>
  </Svg>
);

export default SvgComponent;
