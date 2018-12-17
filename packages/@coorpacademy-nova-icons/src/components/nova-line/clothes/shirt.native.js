import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M21.6 7.2l-4-3A.997.997 0 0 0 17 4h-1.586l-.707-.707A1 1 0 0 0 14 3h-4a1 1 0 0 0-.707.293L8.586 4H7a.997.997 0 0 0-.6.2l-4 3c-.386.291-.51.816-.295 1.247l2 4a.998.998 0 0 0 1.342.447L6 12.619V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6.381l.553.275a.999.999 0 0 0 1.342-.447l2-4A1.003 1.003 0 0 0 21.6 7.2zM13.586 5L12 6.586 10.414 5h3.172zm-6.061 5.15a.996.996 0 0 0-.972-.044l-1.105.553-1.18-2.36L7.334 6h1.252L11 8.414V18H8v-7a.998.998 0 0 0-.475-.85zm11.028.509l-1.105-.553A.998.998 0 0 0 16 11v7h-3V8.414L15.414 6h1.252l3.066 2.299-1.179 2.36z" />
      <Circle cx={14.5} cy={10} r={0.75} />
      <Circle cx={14.5} cy={12.75} r={0.75} />
      <Circle cx={14.5} cy={15.5} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
