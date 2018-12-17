import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21 2h-8a1 1 0 0 0-.707 1.706L13.586 5l-6.293 6.293a.999.999 0 0 0 0 1.414L8.586 14l-6.293 6.293 1.414 1.414L9 16.414V17c0 1.654 1.346 3 3 3h4v-2h-4c-.551 0-1-.449-1-1v-.586l.293.292a.998.998 0 0 0 1.414.001L19 10.414l1.293 1.292A1 1 0 0 0 22 11V3a1 1 0 0 0-1-1zm-9 12.586L9.415 12 15 6.414 17.586 9 12 14.586zm8-6L15.415 4H20v4.586zM18 18h3v2h-3z" />
      <Path d="M18.293 14.293l1.413 1.414-2 2-1.413-1.414zM18.294 23.708l-2-2 1.413-1.414 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
