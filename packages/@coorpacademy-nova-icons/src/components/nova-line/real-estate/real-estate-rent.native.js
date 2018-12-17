import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M23.5 16H19v1.5h1.5V22H22v-4.5h1.5zM16 18.774l-1.626-2.439A.748.748 0 0 0 13 16.75V22h1.5v-2.774l1.626 2.44a.75.75 0 0 0 1.374-.416V16H16v2.774zM5.5 18.25A2.252 2.252 0 0 0 3.25 16H1v6h1.5v-1.5h.388l.876 1.5H5.5l-1.074-1.84A2.244 2.244 0 0 0 5.5 18.25zm-3-.75h.75a.75.75 0 0 1 0 1.5H2.5v-1.5zM5 9h2v4a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9h2a1.002 1.002 0 0 0 .651-1.76l-7-6a1 1 0 0 0-1.302 0l-7 6A1.001 1.001 0 1 0 5 9zm7-5.682L16.297 7H16a1 1 0 0 0-1 1v4H9V8a1 1 0 0 0-1-1h-.297L12 3.318zM7 16.75v4.5c0 .415.336.75.75.75h3.75v-1.5h-3v-.75h2.25v-1.5H8.5v-.75h3V16H7.75a.75.75 0 0 0-.75.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
