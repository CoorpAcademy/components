import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23.961 20.726l-2-7A.999.999 0 0 0 21 13h-6a.999.999 0 0 0-.961.726l-2 7A.998.998 0 0 0 13 22h10a1.001 1.001 0 0 0 .961-1.274zM14.326 20l1.428-5h4.492l1.428 5h-7.348z" />
      <Path d="M9.961 13.726A.999.999 0 0 0 9 13H3a.999.999 0 0 0-.961.726l-2 7A.998.998 0 0 0 1 22h10a1.001 1.001 0 0 0 .961-1.274l-2-7zM2.326 20l1.428-5h4.492l1.428 5H2.326zM7 12h10a.998.998 0 0 0 .961-1.274l-2-7A.999.999 0 0 0 15 3H9a.999.999 0 0 0-.961.726l-2 7A.998.998 0 0 0 7 12zm2.754-7h4.492l1.428 5H8.326l1.428-5z" />
    </G>
  </Svg>
);

export default SvgComponent;
