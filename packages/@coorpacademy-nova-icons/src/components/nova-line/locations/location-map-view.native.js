import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12 10h2V7.48l3-2.399V9h2V3a1 1 0 0 0-1.625-.78L13 5.72l-4.375-3.5a1.004 1.004 0 0 0-.627-.21c-.218 0-.447.07-.622.21l-5 4A.995.995 0 0 0 2 7v14a1 1 0 0 0 1.625.781l5-4A1 1 0 0 0 9 17V5.082l3 2.399V10zM4 7.48l3-2.399V16.52l-3 2.4V7.48z" />
      <Path d="M22.707 21.293l-2.54-2.54A4.966 4.966 0 0 0 21 16c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.966 4.966 0 0 0 2.753-.833l2.54 2.54 1.414-1.414zM16 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
