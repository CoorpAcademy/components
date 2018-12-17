import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.58 10.001h-.06c.02 0 .039.003.06.003v-.003zM20 9.001v-2h-3.42L12.868.504l-1.736.994 3.145 5.503H5.723l3.145-5.503L7.132.504 3.42 7.001H0v2zM18.48 10.001H1.42l1.604 7.217a.997.997 0 0 0 .976.783h6.025c.26-4.455 3.939-7.99 8.455-8zM21.5 19c-.812 0-1.529.396-1.986.998l-2.562-1.024c.029-.155.048-.312.048-.474s-.019-.319-.048-.474l2.562-1.024A2.492 2.492 0 0 0 21.5 18c1.379 0 2.5-1.121 2.5-2.5S22.879 13 21.5 13 19 14.121 19 15.5c0 .03.008.059.009.089l-2.78 1.112A2.488 2.488 0 0 0 14.5 16c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5c.672 0 1.279-.269 1.729-.701l2.78 1.112c-.001.031-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
