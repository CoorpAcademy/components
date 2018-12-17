import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.398 17.42l.861 1.721c.746.165 1.681.275 2.853.275s2.106-.11 2.853-.275l.86-1.721c-.991.275-2.223.441-3.713.441-1.491 0-2.723-.166-3.714-.441zM9.43 13.484l.941 1.882c.734.478 2.191.995 4.74.995s4.006-.517 4.74-.995l.941-1.882c-1.09.766-2.953 1.321-5.682 1.321s-4.59-.555-5.68-1.321zM13.176 20.808c.54.898 1.07 1.697 1.103 1.747a1.001 1.001 0 0 0 1.664 0c.033-.05.563-.849 1.103-1.747-.591.067-1.231.108-1.935.108s-1.343-.041-1.935-.108zM9.711 11.611h.039c0 .375 1.284 1.694 5.361 1.694s5.361-1.32 5.361-1.694h.039C19.54 10.513 17.265 10 15.111 10s-4.428.513-5.4 1.611z" />
      <Path d="M10.134 7.868A4.977 4.977 0 0 1 15 4c2.757 0 5 2.243 5 5h2c0-3.859-3.14-7-7-7a6.961 6.961 0 0 0-6.437 4.254A4.959 4.959 0 0 0 7 6c-2.757 0-5 2.243-5 5s2.243 5 5 5v-2c-1.654 0-3-1.346-3-3s1.346-3 3-3c.569 0 1.129.167 1.619.482a.998.998 0 0 0 1.515-.614z" />
    </G>
  </Svg>
);

export default SvgComponent;
