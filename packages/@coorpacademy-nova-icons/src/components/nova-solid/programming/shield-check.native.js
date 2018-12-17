import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.448 2.106a.997.997 0 0 0-1.047.095L16 4.75l-3.4-2.549a.999.999 0 0 0-1.2 0L8 4.75 4.6 2.201A.998.998 0 1 0 3 3v9c0 5.524 8.201 9.717 8.55 9.894l.45.226.45-.226C12.799 21.717 21 17.524 21 12V3a.998.998 0 0 0-.552-.894zM11 16.414l-3.707-3.707 1.414-1.414L11 13.586l5.293-5.292 1.414 1.414L11 16.414z"
    />
  </Svg>
);

export default SvgComponent;
