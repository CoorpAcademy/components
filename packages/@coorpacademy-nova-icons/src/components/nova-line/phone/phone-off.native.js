import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.292 13.88A9.888 9.888 0 0 1 5 9V4h4v4H8c-.268 0-.524.107-.712.299s-.291.449-.288.717a8.48 8.48 0 0 0 .754 3.401l1.555-1.556a6.052 6.052 0 0 1-.217-.863A2.003 2.003 0 0 0 11 8V4c0-1.104-.897-2-2-2H5c-1.103 0-2 .896-2 2v5c0 2.329.676 4.498 1.832 6.339l1.46-1.459zM20 13h-4a2.002 2.002 0 0 0-1.999 1.922 5.906 5.906 0 0 1-2.237-.858l8.327-8.327-1.414-1.414-15.969 15.97 1.414 1.414 3.365-3.365A11.934 11.934 0 0 0 15 21h5c1.103 0 2-.896 2-2v-4a2 2 0 0 0-2-2zm-5 6a9.937 9.937 0 0 1-6.087-2.084l1.395-1.396C11.613 16.454 13.222 17 15 17a1 1 0 0 0 1-1v-1h4l.001 4H15z" />
    </G>
  </Svg>
);

export default SvgComponent;
