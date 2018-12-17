import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M23.554 17.167C19.44 14.424 15 10.521 15 8.999c0-.551-.448-1-1-1h-4c-.552 0-1 .449-1 1 0 1.521-4.44 5.425-8.555 8.168a1.001 1.001 0 0 0-.445.832v2a1 1 0 0 0 1 1h22a1 1 0 0 0 1-1v-2a1 1 0 0 0-.446-.832zM22 18.999H2v-.468c2.02-1.381 7.674-5.457 8.802-8.532h2.396c1.128 3.075 6.782 7.151 8.802 8.532v.468zM6 7.999c2.206 0 4-1.793 4-4 0-2.205-1.794-4-4-4s-4 1.795-4 4c0 2.207 1.794 4 4 4zm0-6c1.103 0 2 .898 2 2 0 1.103-.897 2-2 2s-2-.897-2-2c0-1.102.896-2 2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
