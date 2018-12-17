import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.518 13.993A9.053 9.053 0 0 1 12 11.51V7.996h2v2.521a8.952 8.952 0 0 1 3-.524c.338 0 .671.022 1 .059V4.579L13.414-.007H2c-1.103 0-2 .897-2 2v18c0 1.103.897 2 2 2h6.523a8.951 8.951 0 0 1-.523-3v-5h1.518zM12 .993l5 5h-5v-5zM3 7.996h2v4H3v-4zm3 9.997H3v-4h3v4zm1-5.997v-4h3v4H7z" />
      <Path d="M17.707 12.287a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.407v4.587a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.587l1.293 1.294 1.414-1.414-6-6zM18 21.995h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
