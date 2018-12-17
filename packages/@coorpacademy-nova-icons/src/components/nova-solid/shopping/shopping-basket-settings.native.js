import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18.58 10h-.57c.189.001.377.015.564.028L18.58 10zM17.99 10H1.42l1.604 7.217A.998.998 0 0 0 4 18h6a8 8 0 0 1 7.99-8zM20 9V7.001h-3.42L12.868.504l-1.736.992 3.145 5.505H5.723l3.145-5.505L7.132.504 3.42 7.001H0V9z" />
      <Path d="M24.002 19v-2H22.9a4.987 4.987 0 0 0-.733-1.754l.784-.784-1.414-1.414-.785.783a4.966 4.966 0 0 0-1.751-.73V12h-2v1.102a4.96 4.96 0 0 0-1.753.731l-.783-.783-1.414 1.415.783.783A4.964 4.964 0 0 0 13.102 17H12v2h1.102c.131.638.385 1.229.732 1.754l-.783.784 1.415 1.413.782-.784a4.956 4.956 0 0 0 1.754.732v1.102h2v-1.103a4.97 4.97 0 0 0 1.753-.732l.784.783 1.413-1.414-.784-.783A4.957 4.957 0 0 0 22.9 19h1.102zM18 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
