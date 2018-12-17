import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <Path
      fill="currentColor"
      d="M18 2H6a4 4 0 0 0-4 4v14a2 2 0 0 0 2 2h4V12c0-.239.085-.469.241-.65l2.358-2.751L6 4h12l-8 8.37V22h10a2 2 0 0 0 2-2V6a4 4 0 0 0-4-4zm-2 15c-1 0-4 0-4-3 .882 0 1.755.394 2.465.827a1.587 1.587 0 0 1-.065-.427c0-.883 1.6-2.4 1.6-2.4s1.6 1.517 1.6 2.4c0 .148-.026.29-.064.427C18.245 14.394 19.117 14 20 14c0 3-3 3-4 3z"
    />
  </Svg>
);

export default SvgComponent;
