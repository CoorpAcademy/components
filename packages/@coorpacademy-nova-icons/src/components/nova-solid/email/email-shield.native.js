import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M15.284 14.026l-6.703 4.787a1 1 0 0 1-1.162 0l-7.365-5.26A2.056 2.056 0 0 0 0 14v8c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2v-7.608a17.2 17.2 0 0 1-.716-.366z" />
      <Path d="M8 16.77l5.466-3.904c-.354-.264-.706-.55-1.043-.866H2c-.194 0-.378.036-.556.088L8 16.77zM12-.001v7c0 3.813 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 12.579 24 10.812 24 6.999v-7H12zm9 7h-2v2h-2v-2h-2v-2h2V3h2v2h2v1.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
