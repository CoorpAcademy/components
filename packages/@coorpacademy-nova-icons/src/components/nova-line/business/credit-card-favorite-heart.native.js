import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8h4v2h-4zM3 8h7v2H3zM3 11h5v2H3z" />
      <Path d="M2 7h15.999l-.001 4H20V2c0-1.102-.896-2-2-2H2C.896 0 0 .898 0 2v12c0 1.103.896 2 2 2h8v-2H2V7zm16-5v3H2V2h16z" />
      <Path d="M20 13c-.735 0-1.451.332-2 .847-.549-.515-1.265-.847-2-.847-2.393 0-4 1.607-4 4 0 3.466 4.924 6.521 5.485 6.858.16.094.337.142.515.142s.355-.048.515-.142C19.076 23.521 24 20.466 24 17c0-2.393-1.607-4-4-4zm-2 8.811c-1.422-.965-4-3.072-4-4.811 0-.601.195-2 2-2 .449 0 1 .552 1 1a1 1 0 1 0 2 0c0-.448.551-1 1-1 1.805 0 2 1.399 2 2 0 1.738-2.578 3.846-4 4.811z" />
    </G>
  </Svg>
);

export default SvgComponent;
