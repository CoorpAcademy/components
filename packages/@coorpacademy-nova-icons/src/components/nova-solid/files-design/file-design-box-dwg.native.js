import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4.125 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.785-1.75-1.75-1.75z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM4.125 16h-1.75V9h1.75c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5zm10.482 0h-1.764l-.856-3.485-.862 3.415.019.07H9.343L7.625 9h1.75l.862 3.413L11.075 9h1.8l.862 3.413L14.575 9h1.8l-1.75 6.93.019.07h-.037zm7.018-5.25h-3.5v3.5h1.75v-.875H19v-1.75h2.625v2.625c0 .965-.785 1.75-1.75 1.75h-1.75c-.965 0-1.75-.785-1.75-1.75v-3.5c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
