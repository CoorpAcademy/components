import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.95 8.781c.029-.26.05-.519.05-.781 0-3.859-3.14-7-7-7S5 4.141 5 8c0 .262.021.522.049.781A6.966 6.966 0 0 0 0 15.5c0 3.86 3.14 7 7 7 1.908 0 3.695-.78 5-2.118a6.967 6.967 0 0 0 5 2.118c3.86 0 7-3.14 7-7a6.964 6.964 0 0 0-5.05-6.719zM12 3c2.757 0 5 2.243 5 5 0 .371-.049.738-.129 1.097L12 12.75 7.128 9.097A5.03 5.03 0 0 1 7 8c0-2.757 2.243-5 5-5zM7 20.5c-2.757 0-5-2.243-5-5a4.966 4.966 0 0 1 3.865-4.852L11 14.5v3.984A4.982 4.982 0 0 1 7 20.5zm10 0a4.98 4.98 0 0 1-4-2.016V14.5l5.135-3.852A4.966 4.966 0 0 1 22 15.5c0 2.757-2.243 5-5 5z" />
      <Path d="M14 8h2c0-2.205-1.794-4-4-4v2c1.103 0 2 .898 2 2zM19 15.5c0 1.104-.897 2-2 2v2c2.206 0 4-1.794 4-4h-2zM8.445 16.831l-3-2 1.11-1.664 3 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
