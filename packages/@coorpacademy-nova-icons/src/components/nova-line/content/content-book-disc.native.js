import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9 18H6V2h10v7h2V1a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h8v-2zm-5 0H2V2h2v16zM21.735 13.326l-2.344 2.344c.103.183.183.376.241.581h3.315a5.952 5.952 0 0 0-1.212-2.925z" />
      <Circle cx={17} cy={17} r={1.25} />
      <Path d="M19.633 17.75a2.745 2.745 0 0 1-2.633 2A2.752 2.752 0 0 1 14.25 17 2.752 2.752 0 0 1 17 14.25c.485 0 .935.137 1.331.358l2.344-2.343A5.97 5.97 0 0 0 17 11a6 6 0 0 0 0 12 5.997 5.997 0 0 0 5.948-5.25h-3.315z" />
    </G>
  </Svg>
);

export default SvgComponent;
