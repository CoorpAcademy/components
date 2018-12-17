import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M18.295 10.491c-1.715-1.203-4.052-1.384-6.606-.547-.161-.129-.318-.264-.491-.373 1.862-1.268 1.92-5.563-1.238-7.324-1.5-.838-3.241-.787-4.658-.048l.177 1.612c1.9-.329 3.819.657 4.32 2.19 1.065 3.256-3.518 4.735-2.445 5.236 5.235 2.445 3.575 6.635 1.096 7.493-2.625.91-5.78-1.282-6.694-4.986a6.173 6.173 0 0 0 12.026 2.736c.478-1.715.155-3.473-.655-4.868 1.601-.365 3.004-.197 4.02.515.975.682 1.512 1.8 1.512 3.146a4.09 4.09 0 0 1-1.823 3.407l-.731.487 1.108 1.663.732-.487a6.084 6.084 0 0 0 2.713-5.071c.001-1.986-.861-3.73-2.363-4.781z" />
      <Path d="M17.812 8A5.323 5.323 0 0 0 21 6.94l-1.431-1.432a5.341 5.341 0 0 1-6.909-1.412A5.354 5.354 0 0 0 17.812 8z" />
      <Circle cx={17.159} cy={3.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
