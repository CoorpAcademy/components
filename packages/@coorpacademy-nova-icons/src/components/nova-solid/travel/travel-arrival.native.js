import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M6.731 16.383l7.393-1.638 4.489 2.096a1.673 1.673 0 0 0 2.235-.82 1.677 1.677 0 0 0-.764-2.19l-4.626-2.139-1.004-6.445-2.794-1.099c.045.314.799 6.015 1.007 6.254L8.659 8.549l-1.123-3.65-2.872-.98 1.868 7.186 3.67 1.639-6.6 2.416 3.129 1.223zM2 21h20v2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
