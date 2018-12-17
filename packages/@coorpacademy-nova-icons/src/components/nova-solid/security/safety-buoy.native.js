import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M21 9.001h-.525A9.029 9.029 0 0 0 15 3.526v-.525a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v.525a9.029 9.029 0 0 0-5.475 5.475H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h.525A9.034 9.034 0 0 0 9 20.476v.525a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.525a9.029 9.029 0 0 0 5.475-5.475H21a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-13.898 4H4.001v-2h3.102a4.995 4.995 0 0 0-.001 2zm3.898-9h2v3.102a4.995 4.995 0 0 0-2 0V4.001zm2 16h-2V16.9a4.995 4.995 0 0 0 2 0v3.101zm-1-5c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.345 3-3 3zm8-2h-3.102a4.988 4.988 0 0 0 0-2H20v2z"
    />
  </Svg>
);

export default SvgComponent;
