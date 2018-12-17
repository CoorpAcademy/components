import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M2 14.566V21a1 1 0 0 0 1 1h3V11.6l-3.515 2.109c-.3.181-.485.506-.485.857zM21.515 13.709L18 11.6V22h3a1 1 0 0 0 1-1v-6.434a1 1 0 0 0-.485-.857zM13 3.8V2h-2v1.8L7.376 6.7A.999.999 0 0 0 7 7.481V22h3v-2a2 2 0 0 1 4 0v2h3V7.481a.997.997 0 0 0-.375-.78L13 3.8zm2 7.2h-2v4h-2v-4H9V9h2V7h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
