import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M24 9.321h-5.76v1.92h1.92V17h1.92v-5.759H24zM17.28 11.241v-1.92h-3.84v1.92h.96v3.84h-.96V17h3.84v-1.919h-.96v-3.84zM12.48 9.321h-2.16l-.72 1.535-.72-1.535H6.72l1.8 3.84L6.72 17h2.16l.72-1.535.72 1.535h2.16l-1.8-3.839zM5.76 11.241v-1.92H.96a.96.96 0 0 0-.96.96v5.76c0 .53.43.959.96.959h4.8v-1.92H1.92v-.96H4.8V12.2H1.92v-.96h3.84z" />
    </G>
  </Svg>
);

export default SvgComponent;
