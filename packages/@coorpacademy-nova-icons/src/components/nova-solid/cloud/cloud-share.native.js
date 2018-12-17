import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.5 10c.269 0 .533.016.796.04A6.951 6.951 0 0 0 20 7c0-3.859-3.141-7-7-7-2.51 0-4.74 1.31-5.978 3.357.965.458 1.996 1.263 2.97 2.647l-.817.576C7.678 4.454 6.393 4 5 4 2.243 4 0 6.243 0 9s2.243 5 5 5h6.299a8.486 8.486 0 0 1 7.201-4zM21.5 19c-.812 0-1.529.396-1.986.998l-2.562-1.024c.029-.155.048-.312.048-.474s-.019-.319-.048-.474l2.562-1.024A2.492 2.492 0 0 0 21.5 18c1.379 0 2.5-1.121 2.5-2.5S22.879 13 21.5 13 19 14.121 19 15.5c0 .03.008.059.009.089l-2.78 1.112A2.488 2.488 0 0 0 14.5 16c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5c.672 0 1.279-.268 1.729-.701l2.78 1.112c-.001.03-.009.059-.009.089 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z" />
    </G>
  </Svg>
);

export default SvgComponent;
