import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.998 3.001c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836l-2.305 2.484a1 1 0 0 0 .732 1.68h10c5.514 0 10-4.037 10-9s-4.485-9-9.999-9zm0 16H4.291l1.328-1.43c.348-.375.356-.952.021-1.338-1.073-1.232-1.642-2.695-1.642-4.232 0-3.859 3.589-7 8-7s8 3.141 8 7c0 3.86-3.589 7-8 7z" />
      <Path d="M10.486 14.007l-1.435-2.301-2.053 3.295h10.075L13.471 9.22z" />
      <Circle cx={10.498} cy={8.501} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
