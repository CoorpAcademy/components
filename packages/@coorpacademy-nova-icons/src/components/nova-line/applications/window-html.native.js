import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20.997 20H3v-2H1v2c0 1.103.897 2 2 2h18c1.104 0 2-.897 2-2v-2h-2.002l-.001 2zM21 2H3c-1.103 0-2 .896-2 2v6h2V8h18l-.001 2H23V4a2 2 0 0 0-2-2zM11 4v2H8V4h3zM3 4h3v2H3V4zm10 2V4h8v2h-8zM3 11v6h1.5v-2.25H6V17h1.5v-4.5H9V17h1.5v-4.5H12V17h1.5v-2.976l.22.329a.635.635 0 0 0 1.06 0l.22-.329V17h1.5v-5.25a.75.75 0 0 0-.75-.75c-.428 0-.25.034-1.5 1.851C13 11.034 13.178 11 12.75 11a.75.75 0 0 0-.75.75V11H6v2.25H4.5V11H3zM17.25 11v6H21v-1.5h-2.25V11z" />
    </G>
  </Svg>
);

export default SvgComponent;
