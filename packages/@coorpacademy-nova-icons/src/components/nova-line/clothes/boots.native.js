import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <Path
      d="M21.242 4.029l-8-2a1 1 0 0 0-1.222.774L10.18 12H7c-2.757 0-5 2.243-5 5s2.243 5 5 5h11c2.205 0 4-1.795 4-4V5c0-.459-.312-.858-.758-.971zM7 14h4a.998.998 0 0 0 .98-.804l.414-2.067 3.363.842.484-1.941-3.455-.863.189-.951 3.827.766.393-1.961-3.827-.766.406-2.029L20 5.781V17H4c0-1.654 1.346-3 3-3zm11 6H7c-.883 0-1.67-.39-2.22-1h14.941A1.99 1.99 0 0 1 18 20z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
