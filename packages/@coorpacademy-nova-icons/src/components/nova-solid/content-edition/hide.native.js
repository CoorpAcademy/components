import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.498 7.715l4.209-4.208-1.414-1.414L1.822 21.562l1.414 1.415 5.167-5.168c1.116.42 2.319.69 3.597.69 6.352 0 11-6.5 11-6.5s-1.726-2.4-4.502-4.284zM12 16a3.985 3.985 0 0 1-1.493-.294l5.198-5.198c.187.461.295.963.295 1.492a4 4 0 0 1-4 4zM4.785 15.771l3.261-3.261A3.732 3.732 0 0 1 8 12a4 4 0 0 1 4-4c.174 0 .342.023.51.046l2.155-2.155A9.688 9.688 0 0 0 12 5.5C5.648 5.5 1 12 1 12s1.431 1.992 3.785 3.771z" />
    </G>
  </Svg>
);

export default SvgComponent;
