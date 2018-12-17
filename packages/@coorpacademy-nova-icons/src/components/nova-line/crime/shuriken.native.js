import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <G fill="currentColor">
      <Path d="M17.145 11.999l4.729-8.513a1 1 0 0 0-1.36-1.36L12 6.856l-8.514-4.73a1 1 0 0 0-1.36 1.36l4.729 8.513-4.729 8.515a.998.998 0 0 0 1.36 1.359L12 17.144l8.514 4.729a1 1 0 0 0 1.36-1.359l-4.729-8.515zm-4.659 3.126a1 1 0 0 0-.972 0l-5.939 3.3 3.3-5.94a.998.998 0 0 0 0-.971l-3.3-5.939 5.939 3.299c.303.168.67.168.973 0l5.939-3.299-3.3 5.939a.998.998 0 0 0 0 .971l3.3 5.94-5.94-3.3z" />
      <Circle cx={12} cy={11.999} r={2} />
    </G>
  </Svg>
);

export default SvgComponent;
