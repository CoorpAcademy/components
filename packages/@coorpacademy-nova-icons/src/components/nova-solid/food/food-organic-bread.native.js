import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <Path
      fill="currentColor"
      d="M16.113 11.841C18.142 11.261 20 9.136 20 6c0-3.309-2.691-6-6-6H6C2.691 0 0 2.691 0 6c0 3.136 1.858 5.261 3.887 5.841l-.879 7.035A.998.998 0 0 0 4 20h7l5.451-5.451-.338-2.708zM24 15.414L22.586 14 21 15.586V14h-2v3.586l-1 1V17h-2v3.586l-1.707 1.707 1.414 1.413L17.414 22H21v-2h-1.586l1-1H24v-2h-1.586z"
    />
  </Svg>
);

export default SvgComponent;
