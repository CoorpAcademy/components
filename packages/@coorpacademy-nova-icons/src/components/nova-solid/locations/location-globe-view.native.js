import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M14 9.294a6.965 6.965 0 0 1 5.987.956c.002-.083.013-.165.013-.25 0-4.1-2.47-7.619-6-9.162V4h-3v3h3v2.294zM4 13V7l3-2V.46C2.943 1.734 0 5.523 0 10c0 5.523 4.477 10 10 10 .085 0 .167-.011.25-.013A6.962 6.962 0 0 1 9 16l-5-3zM20.167 18.753c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.414 23.414 22l-3.247-3.247zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
