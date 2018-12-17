import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-1 13a1 1 0 0 1-1 1H9c-.265 0-.519-.106-.707-.293l-3-3a.998.998 0 0 1 0-1.413l3-3A1 1 0 0 1 9 8h9a1 1 0 0 1 1 1v6z" />
      <Path d="M15.293 9.293L14 10.586l-1.293-1.293-1.414 1.414L12.586 12l-1.293 1.293 1.414 1.414L14 13.414l1.293 1.293 1.414-1.414L15.414 12l1.293-1.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
