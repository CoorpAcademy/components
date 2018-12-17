import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6 19v2a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-2H6zM17 4c-.565 0-1.076.114-1.553.351C14.631 2.824 13.266 2 11.5 2s-3.131.824-3.946 2.35A3.48 3.48 0 0 0 6 4C4.458 4 3 5.458 3 7a4.007 4.007 0 0 0 3 3.873V18h2v-3h1v3h2v-5h1v5h2v-3h1v3h2v-7.127A4.007 4.007 0 0 0 20 7c0-1.542-1.458-3-3-3z" />
    </G>
  </Svg>
);

export default SvgComponent;
