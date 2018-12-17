import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 1.72l-10.625 8.5 1.25 1.561L12 4.281l9.375 7.5 1.25-1.561z" />
      <Path d="M7.434 11L4 16.724V21h2v.5a1.501 1.501 0 0 0 3 0V21h6v.5c0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5V21h2v-4.277L16.566 11H7.434zm1.132 2h6.867l1.8 3H6.766l1.8-3zM14 19h-4v-1h4v1zm-8-1h2v1H6v-1zm10 1v-1h2v1h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
