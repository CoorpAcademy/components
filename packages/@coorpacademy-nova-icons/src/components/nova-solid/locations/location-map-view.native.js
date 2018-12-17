import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M14 9.294V7.481l3-2.399V9h2V3a1.002 1.002 0 0 0-1.625-.78L13 5.72l-4.375-3.5a1.008 1.008 0 0 0-.627-.21c-.216 0-.448.069-.622.21l-5 4A.995.995 0 0 0 2 7v14a1 1 0 0 0 1.625.78l5-4A.997.997 0 0 0 9 17v-1a7 7 0 0 1 5-6.706zM7 16.52l-3 2.4V7.481l3-2.399V16.52z" />
      <Path d="M20.167 18.753c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.414 23.414 22l-3.247-3.247zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
