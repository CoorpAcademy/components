import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M23.479 11.122l-11-6a1 1 0 0 0-.958 0l-11 6 .958 1.756L3 12.049V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.951l1.521.829.958-1.756zM15 21H9v-3.994c.006-.502.177-3.006 3-3.006s2.994 2.504 3 3v4zm4 0h-2v-4c0-1.729-1.045-5-5-5s-5 3.271-5 5v4H5V10.957l7-3.817 7 3.817V21z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
