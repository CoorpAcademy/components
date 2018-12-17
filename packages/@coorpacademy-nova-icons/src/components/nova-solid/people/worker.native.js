import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15 2.685V7h-2V2.08c-.328-.047-.66-.08-1-.08s-.672.033-1 .08V7H9V2.685C6.639 3.812 5 6.215 5 9v1h2.101c.464 2.279 2.484 4 4.899 4s4.435-1.721 4.899-4H19V9c0-2.785-1.639-5.188-4-6.315zM12 12a3.006 3.006 0 0 1-2.829-2h5.657A3.004 3.004 0 0 1 12 12zM8 24h8v-8.264c-.245-.098-.489-.198-.753-.277l-1.117-.337-.13.925V17a2 2 0 0 1-4 0v-.953l-.129-.925-1.117.337c-.265.079-.509.18-.754.277V24zM18 16.885V24h2v-3c0-1.631-.719-3.058-2-4.115zM6 16.885C4.719 17.942 4 19.369 4 21v3h2v-7.115z" />
    </G>
  </Svg>
);

export default SvgComponent;
