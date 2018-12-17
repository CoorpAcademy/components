import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 7V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v10H2v2h9v2h2v-2h9v-2h-1V8a1 1 0 0 0 1-1zM4 5h16v1H4V5zm15 13H5V8h14v10z" />
      <Path d="M15 13c0-.187-.022-.368-.055-.545l1.019-.588-1-1.732-1.026.593a2.958 2.958 0 0 0-.938-.543V9h-2v1.184a2.988 2.988 0 0 0-.938.543l-1.026-.593-1 1.732 1.019.588A2.982 2.982 0 0 0 9 13c0 .187.022.369.055.546l-1.019.589 1 1.732 1.026-.593c.275.234.59.419.938.542V17h2v-1.184c.348-.124.662-.308.938-.542l1.026.593 1-1.732-1.019-.589c.033-.177.055-.359.055-.546zm-3 1a1 1 0 1 1-.002-1.998A1 1 0 0 1 12 14z" />
    </G>
  </Svg>
);

export default SvgComponent;
