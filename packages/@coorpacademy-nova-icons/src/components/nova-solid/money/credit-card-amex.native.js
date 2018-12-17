import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.25 10.5a.75.75 0 0 0-.75.75V12H6v-.75a.75.75 0 0 0-.75-.75zM16.5 9v1.5h-2.25a.75.75 0 0 0-.75.75h2.25v1.5H13.5c0 .415.336.75.75.75h2.25V15l1.406-3L16.5 9z" />
      <Path d="M22 3H2C.897 3 0 3.898 0 5v14c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2V5c0-1.102-.897-2-2-2zm-1 12h-1.688l-.562-1.2-.562 1.2H14.25A2.253 2.253 0 0 1 12 12.75V15h-1.5v-2.976l-.22.328a.634.634 0 0 1-1.06 0L9 12.024V15H6v-1.5H4.5V15H3v-3.75C3 10.011 4.01 9 5.25 9s2.25 1.011 2.25 2.25v-1.5A.75.75 0 0 1 8.25 9c.428 0 .25.035 1.5 1.852C11 9.035 10.822 9 11.25 9a.75.75 0 0 1 .75.75v1.5C12 10.011 13.01 9 14.25 9H18.188l.562 1.201L19.312 9H21l-1.406 3L21 15z" />
    </G>
  </Svg>
);

export default SvgComponent;
