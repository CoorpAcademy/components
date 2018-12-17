import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M12 9a2.99 2.99 0 0 1 2.121.879l6.167-6.171A1.002 1.002 0 0 0 19.581 2H14L9 7l2.14 2.141c.275-.083.559-.141.86-.141zM17 9l-2.14 2.141c.082.273.14.558.14.859 0 .828-.336 1.578-.878 2.121l6.17 6.166A.999.999 0 0 0 22 19.581V14l-5-5zM12 15a2.99 2.99 0 0 1-2.115-.874l-6.172 6.166A.998.998 0 0 0 4.419 22H10l5-4.988-2.139-2.152c-.275.082-.56.14-.861.14zM9.14 12.86A2.983 2.983 0 0 1 9 12c0-.828.336-1.578.878-2.121l-6.17-6.166A1 1 0 0 0 2 4.419V10l5 5 2.14-2.14z" />
      <Circle cx={12} cy={12} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
