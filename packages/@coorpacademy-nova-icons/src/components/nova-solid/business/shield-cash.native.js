import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.447 2.106a.997.997 0 0 0-1.047.095L16 4.75l-3.399-2.549a.999.999 0 0 0-1.2 0L8 4.75 4.601 2.201A.999.999 0 0 0 3 3v9c0 5.524 8.201 9.719 8.551 9.894l.449.227.45-.227C12.799 21.719 21 17.524 21 12V3a1 1 0 0 0-.553-.894zM15 10h-3.5a.5.5 0 0 0 0 1h1c1.379 0 2.5 1.122 2.5 2.5 0 1.208-.86 2.219-2 2.45V17h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 10.5c0-1.206.86-2.217 2-2.449V7h2v1h2v2z"
    />
  </Svg>
);

export default SvgComponent;
