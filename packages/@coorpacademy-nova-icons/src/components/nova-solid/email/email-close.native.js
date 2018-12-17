import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M8 16.771l6.014-4.295a6.12 6.12 0 0 1-.477-.476H2c-.193 0-.378.036-.556.088L8 16.771z" />
      <Path d="M15.873 13.606l-7.292 5.208a1 1 0 0 1-1.162-.001l-7.364-5.26A2.003 2.003 0 0 0 0 14v8c0 1.103.896 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.124-.016-.244-.037-.362a2.381 2.381 0 0 0-.09-.032zM21.707 5.707l-1.414-1.414L18 6.586l-2.293-2.293-1.414 1.414L16.586 8l-2.293 2.293 1.414 1.414L18 9.414l2.293 2.293 1.414-1.414L19.414 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
