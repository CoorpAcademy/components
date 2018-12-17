import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M22 0H8C6.896 0 6 .898 6 2v9h2V2h3v6a1.002 1.002 0 0 0 1.707.707L15 6.415l2.293 2.293A1 1 0 0 0 19 8V2h3l-.003 12H15v2h7c1.104 0 2-.897 2-2V2c0-1.102-.896-2-2-2zm-5 5.586l-1.293-1.292a.994.994 0 0 0-1.414-.001L13 5.586V2h4v3.586z" />
      <Path d="M20 17h-7.586l.293-.292c.305-.305.38-.77.188-1.155l-1-2a.999.999 0 0 0-1.211-.501l-4.757 1.585A.997.997 0 0 0 5 14H1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h11c.314 0 .611-.148.8-.399l3-4A.999.999 0 0 0 20 17zM2 22v-6h2v6H2zm14.5-1H6v-4.279l4.494-1.498.289.58-1.49 1.491A.988.988 0 0 0 9.01 18H9v1h9l-1.5 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
