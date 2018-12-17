import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      d="M18 11a.852.852 0 0 0-.008-.124l-1-8A1 1 0 0 0 16 2H8a1 1 0 0 0-.992.876l-1 8A.852.852 0 0 0 6 11c0 2.967 2.167 5.431 5 5.91V20H8v2h8v-2h-3v-3.09c2.833-.479 5-2.943 5-5.91zm-10 .059L8.883 4h2.248l-.963 1.445a1 1 0 0 0 .125 1.262L11.586 8l-1.293 1.293 1.414 1.414 2-2a.999.999 0 0 0 0-1.414l-1.42-1.42L13.535 4h1.582L16 11.059C15.968 13.237 14.186 15 12 15s-3.968-1.763-4-3.941z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
