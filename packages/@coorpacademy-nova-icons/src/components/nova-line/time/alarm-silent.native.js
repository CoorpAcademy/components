import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M8.555 20c.693 1.19 1.969 2 3.445 2s2.752-.81 3.445-2h-6.89z"
      fill="currentColor"
    />
    <G fill="currentColor">
      <Path d="M8 11.171V10c0-2.206 1.794-4 4-4 .355 0 .694.062 1.022.149l1.558-1.558A5.955 5.955 0 0 0 12 4c-3.309 0-6 2.691-6 6v2.838c0 .122-.016.242-.029.362L8 11.171zM18 12.838V10a5.96 5.96 0 0 0-.591-2.581l4.505-4.505L20.5 1.5.822 21.178l1.414 1.415L5.828 19H21v-2.721l-.684-.227A3.385 3.385 0 0 1 18 12.838zM7.828 17l8.023-8.022c.087.328.149.667.149 1.022v2.838c0 1.648.745 3.16 1.965 4.162H7.828z" />
    </G>
  </Svg>
);

export default SvgComponent;
