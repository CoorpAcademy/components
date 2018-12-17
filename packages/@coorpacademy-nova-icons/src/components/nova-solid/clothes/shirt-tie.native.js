import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.002h24v24.002h-24z" />
    <Path
      fill="currentColor"
      d="M21.6 8.2l-4-3A.997.997 0 0 0 17 5h-.586l-1.707-1.707A1.002 1.002 0 0 0 14 3h-4c-.266 0-.519.106-.707.293L7.586 5H7a.997.997 0 0 0-.6.2l-4 3a1 1 0 0 0-.232 1.355l2 3a1 1 0 0 0 1.279.34L6 12.619V20a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-7.381l.553.276a1 1 0 0 0 1.279-.34l2-3A1 1 0 0 0 21.6 8.2zM14 15l-2 2-2-2 1.683-6.731L9.414 6l1-1h3.172l1 1-2.269 2.269L14 15z"
    />
  </Svg>
);

export default SvgComponent;
