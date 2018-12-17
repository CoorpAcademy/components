import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 3.003H3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-16c0-.55-.45-1-1-1zM20.2 3.602L9.8 11.403c-.44.329-.44.87 0 1.199l10.4 7.801c.44.329.8.149.8-.4v-16c0-.55-.36-.73-.8-.401z" />
    </G>
  </Svg>
);

export default SvgComponent;
