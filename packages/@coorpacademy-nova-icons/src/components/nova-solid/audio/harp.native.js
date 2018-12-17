import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.424 6.688c-.322-.435-.841-.685-1.424-.685h-7v-1c0-1.104-.897-2-2-2H5.791c-.261-.595-.74-1-1.291-1-.825 0-1.5.9-1.5 2V17.54a5.967 5.967 0 0 1 3-1.447V5.003h2v11.09a5.955 5.955 0 0 1 2 .72V5.003h2v13.681h-.003c.372.56.648 1.186.816 1.856 6.67-2.224 9.707-11.827 9.849-12.29.171-.556.084-1.126-.238-1.562zM14 17.732v-9.73h2v8h.049A11.177 11.177 0 0 1 14 17.732zm4-4.28V8.003h2.637c-.296.849-1.176 3.162-2.637 5.449z" />
      <Path d="M7 18.003a4 4 0 0 0-4 4h8a4 4 0 0 0-4-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
