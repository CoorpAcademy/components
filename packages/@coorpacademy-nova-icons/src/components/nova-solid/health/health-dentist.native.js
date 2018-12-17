import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002 0h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M21 7c0-2.757-2.243-5-5-5-1.743 0-3.133.518-4 1.418C11.133 2.518 9.743 2 8 2 5.243 2 3 4.243 3 7c0 1.919.69 3.834 1.87 5.244-.589 2.625.849 7.91 1.169 9.031a.997.997 0 0 0 .91.724L7 22c.407 0 .775-.248.929-.628C8.383 20.237 10.104 17 12 17c1.887 0 3.615 3.238 4.072 4.373.159.396.566.648.979.625a.996.996 0 0 0 .909-.723c.32-1.121 1.758-6.406 1.169-9.031C20.31 10.834 21 8.919 21 7zm-5 4h-3v3h-2v-3H8V9h3V6h2v3h3v2z"
    />
  </Svg>
);

export default SvgComponent;
