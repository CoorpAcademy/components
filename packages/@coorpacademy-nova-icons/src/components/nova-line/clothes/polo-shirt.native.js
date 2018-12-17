import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <Path
      d="M21.6 7.2l-4-3A.997.997 0 0 0 17 4h-1.586l-.707-.707A1 1 0 0 0 14 3h-4a1 1 0 0 0-.707.293L8.586 4H7a.997.997 0 0 0-.6.2l-4 3c-.386.291-.51.816-.295 1.247l2 4a.998.998 0 0 0 1.342.447L6 12.619V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6.381l.553.275a.999.999 0 0 0 1.342-.447l2-4A1.003 1.003 0 0 0 21.6 7.2zM13.586 5L12 6.586 10.414 5h3.172zm4.967 5.659l-1.105-.553A.998.998 0 0 0 16 11v7H8v-7a.998.998 0 0 0-1.447-.894l-1.105.553-1.18-2.36L7.334 6h1.252L11 8.414V12h2V8.414L15.414 6h1.252l3.066 2.299-1.179 2.36z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
