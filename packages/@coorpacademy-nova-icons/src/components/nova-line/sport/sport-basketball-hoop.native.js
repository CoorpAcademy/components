import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M14.838 17.25H12.75V15h-1.5v2.25H9.162L8.881 15H7.369l.887 7.094A.75.75 0 0 0 9 22.75h6a.75.75 0 0 0 .744-.656L16.631 15h-1.512l-.281 2.25zm-3.588 4H9.662l-.313-2.5h1.9v2.5zm3.088 0H12.75v-2.5h1.9l-.312 2.5zM21 2H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM9 12V9h6v3H9zm11 0h-3V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v4H4V4h16v8z" />
    </G>
  </Svg>
);

export default SvgComponent;
