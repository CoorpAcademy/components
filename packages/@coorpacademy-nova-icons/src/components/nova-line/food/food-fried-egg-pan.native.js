import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <G fill="currentColor">
      <Path d="M13 3c-4.411 0-8 3.589-8 8a7.96 7.96 0 0 0 1.688 4.898l-4.396 4.395 1.414 1.414 4.396-4.395A7.95 7.95 0 0 0 13 19c4.411 0 8-3.589 8-8s-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <Path d="M13.04 7C10.831 6.979 9.021 8.792 9 11c-.029 3 2.438.438 4 2 1 1 4 3 4-2.069 0-2.208-1.752-3.91-3.96-3.931zm.445 4.999A1.5 1.5 0 1 1 15 10.515a1.5 1.5 0 0 1-1.515 1.484z" />
    </G>
  </Svg>
);

export default SvgComponent;
