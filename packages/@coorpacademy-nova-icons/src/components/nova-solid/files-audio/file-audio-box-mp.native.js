import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.006H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-12.625 10h-1.75v-3.235l-.147.22c-.325.487-1.131.487-1.456 0l-.147-.22v3.235h-1.75V9.881a.874.874 0 0 1 1.603-.485l1.022 1.533 1.022-1.533a.876.876 0 0 1 1.603.485v6.125zm3.5-1.75H12v1.75h-1.75v-7h2.625a2.628 2.628 0 0 1 2.625 2.625 2.628 2.628 0 0 1-2.625 2.625zm7 .875a.875.875 0 0 1-.875.875h-2.625v-1.75h1.75v-.875h-1.75v-1.75h1.75v-.875h-1.75v-1.75H19c.483 0 .875.392.875.875v5.25z" />
      <Path d="M12.875 10.756H12v1.75h.875a.875.875 0 0 0 0-1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
