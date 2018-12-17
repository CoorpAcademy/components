import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001 0H24v24.001H-.001z" />
    <G fill="currentColor">
      <Path d="M4.004 11.023c0-.008-.004-.015-.004-.023V9H2v2c0 .917.422 1.729 1.072 2.281a4.968 4.968 0 0 1 .932-2.258zM22.127 11.669l-2.196-5.584a1 1 0 0 0-1.296-.565L6.534 10.278a4.01 4.01 0 0 0-2.257 5.188 3.993 3.993 0 0 0 1.235 1.66l-1.065.533-.553-1.106-1.789.895 1 2a1.002 1.002 0 0 0 1.342.447l2.842-1.421A3.97 3.97 0 0 1 7 17a4 4 0 0 1 4-4 3.99 3.99 0 0 1 3.748 2.644l6.814-2.679a1.001 1.001 0 0 0 .565-1.296z" />
      <Circle cx={11} cy={17} r={3} />
    </G>
  </Svg>
);

export default SvgComponent;
