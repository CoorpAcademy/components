import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M5.438 10.75v3.5c.965 0 1.75-.785 1.75-1.75s-.786-1.75-1.75-1.75z" />
      <Path d="M22 6H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.438 16h-1.75V9h1.75c1.93 0 3.5 1.57 3.5 3.5 0 1.931-1.57 3.5-3.5 3.5zm8.75 0h-1.969l-.656-1.398L10.906 16H8.938l1.641-3.5L8.938 9h1.969l.656 1.4.656-1.4h1.969l-1.641 3.5 1.641 3.5zm6.124-5.25h-3.5v.875h2.625v1.75h-2.625V16h-1.75v-5.25c0-.965.785-1.75 1.75-1.75h3.5v1.75z" />
    </G>
  </Svg>
);

export default SvgComponent;
