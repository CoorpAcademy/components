import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.781 10.319C17.043 8.708 18 6.878 18 5.001c0-2.757-2.243-5-5-5-1.594 0-3.07.837-4 2.08C8.07.838 6.594.001 5 .001c-2.757 0-5 2.243-5 5 0 5.491 8.124 10.632 8.471 10.848a.998.998 0 0 0 1.058 0c.068-.042.443-.28.992-.669a8.014 8.014 0 0 1 5.26-4.861zM24.002 19.001v-2H22.9a4.987 4.987 0 0 0-.733-1.754l.784-.784-1.414-1.414-.785.784a4.93 4.93 0 0 0-1.751-.73v-1.102h-2v1.102a4.96 4.96 0 0 0-1.753.731l-.783-.783-1.414 1.414.783.783a4.961 4.961 0 0 0-.732 1.753H12v2h1.102c.131.638.385 1.229.732 1.754l-.783.784 1.415 1.413.782-.784a4.956 4.956 0 0 0 1.754.732v1.102h2v-1.103a4.988 4.988 0 0 0 1.753-.732l.784.783 1.413-1.415-.784-.782a4.957 4.957 0 0 0 .732-1.752h1.102zm-6.002 1a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </G>
  </Svg>
);

export default SvgComponent;
