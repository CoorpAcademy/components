import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M21.784 19.823l-1.607-8.039c-.2-1-1.156-1.784-2.177-1.784h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.021 0-1.977.784-2.177 1.784l-1.607 8.039c-.11.552.021 1.108.362 1.522.341.417.86.655 1.422.655h16c.562 0 1.081-.238 1.422-.654a1.82 1.82 0 0 0 .362-1.523zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7zm9 8H9v2H7v-2H6v-2h12v2z"
    />
  </Svg>
);

export default SvgComponent;
