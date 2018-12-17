import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.006H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2v-9a2 2 0 0 0-2-2zm-12.642 10H7.593l-.854-3.485-.863 3.414.018.071H4.094L2.377 9.008h1.75l.861 3.413.837-3.413h1.8l.863 3.413.836-3.413h1.8l-1.749 6.927.017.071h-.034zm7.016-.002h-1.75v-1.75h-1.749v1.75h-1.75V9.881c0-.483.392-.875.875-.875h3.499c.484 0 .875.392.875.875v6.123zm3.517.002H18.09l-1.717-6.998h1.75l.861 3.413.837-3.413h1.8l-1.75 6.927.02.071z" />
      <Path d="M12.875 10.756h1.749v1.75h-1.749z" />
    </G>
  </Svg>
);

export default SvgComponent;
