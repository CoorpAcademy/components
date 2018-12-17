import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.447 2.106a.997.997 0 0 0-1.047.095L16 4.75l-3.4-2.549a.999.999 0 0 0-1.2 0L8 4.75 4.6 2.201A.998.998 0 1 0 3 3v9c0 5.524 8.201 9.717 8.55 9.894a1.015 1.015 0 0 0 .9 0C12.799 21.717 21 17.524 21 12V3a.998.998 0 0 0-.553-.894zM12 19.869C9.692 18.602 5 15.337 5 12V5l2.4 1.8c.355.266.845.266 1.2 0L12 4.25l3.4 2.55c.355.266.845.266 1.2 0L19 5v7c0 3.329-4.693 6.6-7 7.869z" />
      <Path d="M11 13.586l-2.293-2.292-1.414 1.414L11 16.414l6.707-6.706-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
