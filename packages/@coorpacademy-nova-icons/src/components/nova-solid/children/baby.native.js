import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <G fill="currentColor">
      <Path d="M14.562 16.959l4.007 1.753c.403-1.284.704-2.616.935-3.948l-4.942 2.195z" />
      <Circle cx={11.983} cy={9.498} r={1.5} />
      <Path d="M4.522 14.748c1.43 8.3 3.918 9.249 7.492 9.249 2.947 0 4.64-.898 5.84-3.416L4.522 14.748zM12.082 15.873l7.747-3.441c.276-2.585.19-4.355.185-4.434 0-4.635-3.364-8-8-8s-8 3.365-7.998 7.947c-.006.113-.092 1.894.184 4.48l7.882 3.448zm-.068-12.875a5 5 0 1 1 0 10 5 5 0 0 1 0-10z" />
    </G>
  </Svg>
);

export default SvgComponent;
