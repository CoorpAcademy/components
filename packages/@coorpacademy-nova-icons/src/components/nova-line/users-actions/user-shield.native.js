import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8.002 16.006c-2.205 0-4-1.795-4-4s1.795-4 4-4 4 1.795 4 4-1.794 4-4 4zm0-6a2 2 0 1 0 .001 4.001 2 2 0 0 0-.001-4.001zM16.002 24.006h-16v-1c0-3.533 3.289-6 8-6s8 2.467 8 6v1zm-13.841-2h11.684c-.599-1.808-2.834-3-5.842-3s-5.244 1.192-5.842 3zM18.002 13.025l-.196-.039c-2.007-.401-5.804-2.168-5.804-5.98v-7h12v7c0 3.813-3.797 5.579-5.804 5.98l-.196.039zm-4-11.019v5c0 2.748 3.176 3.757 4.002 3.973.844-.216 3.998-1.21 3.998-3.973v-5h-8z" />
      <Path d="M21.002 5.006h-2v-2h-2v2h-2v2h2v2h2v-2h2z" />
    </G>
  </Svg>
);

export default SvgComponent;
