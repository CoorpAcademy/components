import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24.002h-24z" />
    <G fill="currentColor">
      <Path d="M12 2c-1.45 0-2.848.304-4.156.902l.832 1.818A7.952 7.952 0 0 1 12 4c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8c0-.694.089-1.383.264-2.047l-1.934-.51C2.111 10.274 2 11.133 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10S17.514 2 12 2z" />
      <Circle cx={5} cy={6} r={2} />
      <Path d="M12 18c3.309 0 6-2.691 6-6s-2.691-6-6-6-6 2.691-6 6 2.691 6 6 6zm-1-9.857V10h-1v3.236L11.941 15l1.176-2.941 1.766-.588L13 10V8.143c1.72.447 3 1.999 3 3.857 0 2.205-1.794 4-4 4s-4-1.795-4-4c0-1.858 1.28-3.41 3-3.857z" />
    </G>
  </Svg>
);

export default SvgComponent;
