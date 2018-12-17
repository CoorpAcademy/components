import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M21.423 7.669A1.786 1.786 0 0 0 20 7h-7V6c0-1.102-.897-2-2-2H5V2H3v16.031c-.62.834-1 1.854-1 2.969v1h10c0-1.898.007-.494-.022-1.219 7.149-1.541 9.639-11.126 9.75-11.569.138-.556.027-1.117-.305-1.543zM7 6v10a4.95 4.95 0 0 0-2 .424V6h2zM4.171 20c.413-1.164 1.525-2 2.829-2s2.416.836 2.829 2H4.171zM9 16.424V6h2v12.031a5.011 5.011 0 0 0-2-1.607zm4 1.903V9h2v8h.035A8.491 8.491 0 0 1 13 18.327zm4-3.571V9h2.712c-.243.833-1.087 3.421-2.712 5.756z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
