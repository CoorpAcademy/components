import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20.998 11.998h-3v-1a1 1 0 0 0-1-1h-4V6.389c1.313 1.546 3.611 2.608 5 2.608 2.663 0 4-2.564 4-4 0-1.542-1.458-3-3-3-4.643 0-7 .31-7 2 0-1.69-2.357-2-7-2-1.542 0-3 1.458-3 3 0 1.436 1.337 4 4 4 1.389 0 3.688-1.062 5-2.608v3.608h-4a1 1 0 0 0-1 1v1h-3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-1h8v1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-8a.999.999 0 0 0-1-.999zm-1-7c0 .483-.602 2-2 2V4.006c.313-.005.641-.009 1-.009.449.001 1 .552 1 1.001zm-4-.92v2.196c-.887-.524-1.714-1.253-1.939-1.929.302-.095.882-.197 1.939-.267zm-12 .92c0-.449.551-1 1-1 .359 0 .688.003 1 .009v2.991c-1.398 0-2-1.518-2-2zm4 1.276V4.078c1.057.07 1.637.172 1.939.268-.225.675-1.052 1.404-1.939 1.928zm-2 13.724h-2v-6h2v6zm9-2v-3h-2v3h-5v-6h8v6h-1zm5 2h-2v-6h2v6z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
