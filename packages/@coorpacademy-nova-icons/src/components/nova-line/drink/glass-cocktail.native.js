import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M18 2c-2.205 0-4 1.794-4 4H8.414l-3-3H2v2h2.586l1 1H3a.999.999 0 0 0-.707 1.707L9 14.415V20H6v2h8v-2h-3v-5.586l4.98-4.981c.596.352 1.28.567 2.02.567 2.205 0 4-1.795 4-4.001A4.004 4.004 0 0 0 18 2zm-3.443 6L10 12.586 5.414 8h9.143zM18 8c-.178 0-.348-.03-.512-.074l.219-.22A1 1 0 0 0 17 6h-1a2 2 0 1 1 2 2z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
