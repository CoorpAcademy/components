import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 6.753v-2.75c0-.55-.36-.73-.8-.4l-10.4 7.8c-.44.329-.44.87 0 1.199l10.4 7.801c.44.329.8.149.8-.4v-2.75l-7-5.25 7-5.25z" />
      <Path d="M21.2 3.602l-10.4 7.801c-.44.329-.44.87 0 1.199l10.4 7.801c.44.329.8.149.8-.4v-16c0-.55-.36-.73-.8-.401z" />
    </G>
  </Svg>
);

export default SvgComponent;
