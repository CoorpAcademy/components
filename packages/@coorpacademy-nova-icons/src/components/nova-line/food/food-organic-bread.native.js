import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <Path
      d="M5.992 11.124A.998.998 0 0 0 5 10c-1.443 0-3-1.529-3-4 0-2.206 1.794-4 4-4h8c2.206 0 4 1.794 4 4 0 2.471-1.557 4-3 4a1 1 0 0 0-.993 1.123l.485 3.883 1.984-.248-.365-2.918C18.142 11.261 20 9.136 20 6c0-3.309-2.691-6-6-6H6C2.691 0 0 2.691 0 6c0 3.136 1.858 5.261 3.887 5.841l-.879 7.035A.998.998 0 0 0 4 20h9v-2H5.133l.859-6.876zM23 15.414L21.586 14 20 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.414L16.414 22H20v-2h-1.586l1-1H23v-2h-1.586z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
