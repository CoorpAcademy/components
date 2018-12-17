import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 16.771l5.482-3.917a5.937 5.937 0 0 1-.945-.854H2c-.193 0-.378.036-.556.088L8 16.771z" />
      <Path d="M15.57 13.821l-6.989 4.992a.995.995 0 0 1-1.162 0l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.031-.008-.061-.01-.091a5.494 5.494 0 0 1-.42-.088zM16 11.414l-3.707-3.707 1.414-1.414L16 8.586l4.293-4.293 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
