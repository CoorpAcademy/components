import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M7 12.002h10a.996.996 0 0 0 .961-1.274l-2-7A.999.999 0 0 0 15 3.002H9a1 1 0 0 0-.961.725l-2 7A.999.999 0 0 0 7 12.002zm2.857-6h2.285l-.857 3H9l.857-3zM9.961 13.727A1 1 0 0 0 9 13.002H3a.999.999 0 0 0-.961.726l-2 7A.999.999 0 0 0 1 22.002h10a1.002 1.002 0 0 0 .961-1.275l-2-7zm-3.818 5.275H3.857l.857-3H7l-.857 3z" />
      <Path d="M23.961 20.728l-2-7a.999.999 0 0 0-.961-.726h-6a.999.999 0 0 0-.961.726l-2 7A.999.999 0 0 0 13 22.003h10a1 1 0 0 0 .961-1.275zm-5.676-1.726H16l.857-3h2.285l-.857 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
