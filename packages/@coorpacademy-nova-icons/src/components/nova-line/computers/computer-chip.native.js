import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 9V7h-2V6c0-1.104-.897-2-2-2h-1V2h-2v2h-2V2h-2v2H9V2H7v2H6c-1.103 0-2 .896-2 2v1H2v2h2v2H2v2h2v2H2v2h2v1c0 1.103.897 2 2 2h1v2h2v-2h2v2h2v-2h2v2h2v-2h1c1.103 0 2-.897 2-2v-1h2v-2h-2v-2h2v-2h-2V9h2zM6 18V6h12l.001 12H6z" />
      <Path d="M16.285 9.714A.713.713 0 0 0 15.571 9h-2.143a.714.714 0 0 0-.692.541l-.715 2.857a.714.714 0 0 0 .693.887h2.143v1.428h1.428v-1.428H17v-1.429h-.715V9.714zm-1.428 2.143H13.63l.356-1.429h.871v1.429zM7 9.714V14c0 .395.319.714.715.714h2.856a.713.713 0 0 0 .714-.714v-2.143a.713.713 0 0 0-.714-.715H8.429v-.714h2.856V9h-3.57A.713.713 0 0 0 7 9.714zm1.429 2.857h1.429v.715H8.429v-.715z" />
    </G>
  </Svg>
);

export default SvgComponent;
