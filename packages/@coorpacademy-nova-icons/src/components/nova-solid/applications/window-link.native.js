import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v2.002h20V2zM3 3a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3 0a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM17.5 9c.87 0 1.709.132 2.5.375V5.002H0V16c0 1.103.896 2 2 2h7.025c-.009-.166-.025-.331-.025-.5A8.5 8.5 0 0 1 17.5 9zM15 21.586L13.414 20l2.293-2.294-1.414-1.413-3 3a.998.998 0 0 0 0 1.413l3 3a.994.994 0 0 0 1.414 0l3-3-1.414-1.413L15 21.586zM23.707 14.293l-3-3a.999.999 0 0 0-1.414 0l-3 3 1.414 1.413L20 13.414 21.586 15l-2.293 2.293 1.414 1.413 3-3a.998.998 0 0 0 0-1.413z" />
      <Path d="M18.292 15.292l1.414 1.413-3 3-1.414-1.412z" />
    </G>
  </Svg>
);

export default SvgComponent;
