import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.999 10.019V4.58L13.413-.006H1.999c-1.103 0-2 .898-2 2v18c0 1.104.897 2.001 2 2.001h8.761a8.432 8.432 0 0 1-.735-3.001H2.999v-11h2v5.586l2.293-2.293a.999.999 0 0 1 1.414 0l2.293 2.293c2-2.585 4.234-3.399 7-3.561zm-6-9.025l5 5h-5v-5z" />
      <Path d="M5 16.414V17h5.14c.073-.409.173-.807.303-1.193-.25-.171-2.206-2.155-2.443-2.393l-3 3zM21.5 19.001c-.812 0-1.529.396-1.986.998l-2.562-1.024c.029-.154.048-.311.048-.474 0-.162-.019-.319-.048-.474l2.562-1.024a2.489 2.489 0 0 0 1.986.998c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5-2.5 1.121-2.5 2.5c0 .03.008.059.009.089l-2.78 1.112a2.487 2.487 0 0 0-1.729-.701 2.502 2.502 0 0 0-2.5 2.5 2.503 2.503 0 0 0 2.5 2.501c.672 0 1.279-.27 1.729-.701l2.78 1.112c-.001.03-.009.058-.009.089 0 1.378 1.121 2.5 2.5 2.5s2.5-1.122 2.5-2.5a2.502 2.502 0 0 0-2.5-2.501z" />
    </G>
  </Svg>
);

export default SvgComponent;
