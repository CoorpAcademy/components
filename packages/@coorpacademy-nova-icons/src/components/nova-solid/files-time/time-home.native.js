import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 10c.315 0 .626.017.933.049C17.974 9.704 18 9.356 18 9c0-4.962-4.037-9-9-9S0 4.038 0 9c0 4.646 3.541 8.482 8.066 8.951C8.586 13.476 12.385 10 17 10zm-9-.465V4h2v4.465l2.555 1.703-1.109 1.663L8 9.535zM17.707 12.293a.999.999 0 0 0-1.414 0l-6 6 1.414 1.413L13 18.414V23a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.292 1.414-1.413-6-6zM18 22h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
