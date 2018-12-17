import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M10 18c-4.411 0-8-3.589-8-8 0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931 0 .276-.014.55-.042.819l1.99.202c.034-.335.052-.676.052-1.021 0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10c.375 0 .745-.021 1.108-.06l-.219-1.989A8.163 8.163 0 0 1 10 18zm2-10v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <Path d="M21.293 16.293L19 18.586V13h-2v5.586l-2.293-2.293-1.414 1.414L18 22.414l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
