import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 6h-3.022C18.152 3.577 15.262 2 12 2 8.739 2 5.848 3.577 4.022 6H1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3.022c1.825 2.424 4.717 4 7.978 4 3.262 0 6.152-1.576 7.978-4H23a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-5.737 0H16v-.91a8.25 8.25 0 0 1 1.263.91zM14 4.263V6h-4V4.263C10.641 4.097 11.309 4 12 4s1.36.097 2 .263zM8 5.09V6H6.737A8.299 8.299 0 0 1 8 5.09zM6.737 18H8v.911A8.039 8.039 0 0 1 6.737 18zM10 19.738V18h4v1.738c-.64.166-1.309.262-2 .262s-1.359-.096-2-.262zm6-.827V18h1.263c-.39.344-.812.648-1.263.911zM22 16H2V8h20v8z" />
      <Path d="M5.24 14h1.022l-.011-.042.493-1.95L7.232 14h1.03l-.011-.042 1-3.958H8.223l-.479 1.951L7.251 10H6.223l-.479 1.951L5.251 10h-1l.981 4z" />
      <Path d="M10.24 14h1.021l-.01-.04.492-1.952.489 1.992h1.029l-.01-.04.999-3.96h-1.028l-.479 1.951L12.25 10h-1.028l-.479 1.951L10.251 10h-1l.981 4zM15.24 14h1.021l-.01-.04.492-1.952.489 1.992h1.029l-.01-.04.999-3.96h-1.028l-.479 1.951L17.25 10h-1.028l-.479 1.951L15.25 10h-1l.982 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
