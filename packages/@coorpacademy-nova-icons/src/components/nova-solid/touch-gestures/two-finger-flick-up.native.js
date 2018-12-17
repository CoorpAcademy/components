import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8.001a3 3 0 0 0-3-3H2v12h8a3 3 0 0 0 0-6 3 3 0 0 0 3-3zm-2 6a1 1 0 0 1-1 1H9v-2h1a1 1 0 0 1 1 1zm-1-5H9v-2h1a1 1 0 1 1 0 2zM20.094 19.1L22 21.005h-4l2 2h-5v-5l2 2v-4l1.615 1.614c.635-1.985.803-4.105.479-6.184a13.397 13.397 0 0 0-3.8-7.48l1.412-1.416a15.383 15.383 0 0 1 4.364 8.589 15.492 15.492 0 0 1-.872 8.011l-.104-.039z" />
    </G>
  </Svg>
);

export default SvgComponent;
