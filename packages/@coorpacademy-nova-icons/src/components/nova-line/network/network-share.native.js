import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.809 6.599c.334.249.743.401 1.191.401a2 2 0 1 0 0-4c-1.021 0-1.855.77-1.976 1.761L9.191 6.402A1.984 1.984 0 0 0 8 6a2 2 0 0 0 0 4c.448 0 .857-.152 1.191-.401l3.833 1.645A1.995 1.995 0 0 0 17 11a2 2 0 0 0-2-2c-.448 0-.857.153-1.191.402L10.539 8l3.27-1.401z" />
      <Circle cx={3} cy={23} r={1} />
      <Circle cx={21} cy={23} r={1} />
      <Path d="M23.633 17.734L22 12.838V1a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v11.838L.367 17.734c-.186.558-.109 1.13.208 1.571.318.443.837.695 1.425.695h9v2.003H5v2h14v-2h-6V20h9c.588 0 1.107-.252 1.425-.694.317-.441.393-1.014.208-1.572zM2.388 18l1.333-4H12v-2H4V2h16v10h-2v2h2.279l1.333 4H2.388z" />
      <Path d="M10 15h4v2h-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
