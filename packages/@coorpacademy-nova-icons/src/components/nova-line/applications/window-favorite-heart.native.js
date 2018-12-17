import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M2 6h18l-.001 4.994H22V2c0-1.103-.897-2-2-2H2C.897 0 0 .897 0 2v16c0 1.103.897 2 2 2h8v-2H2V6zm5-2V2h3v2H7zm13 0h-8V2h8v2zM5 2v2H2V2h3z" />
      <Path d="M20 12.994c-.735 0-1.452.332-2 .846-.548-.515-1.265-.846-2-.846-2.393 0-4 1.607-4 4 0 3.466 4.924 6.521 5.485 6.857a1 1 0 0 0 1.03 0C19.076 23.515 24 20.46 24 16.994c0-2.392-1.607-4-4-4zm-2 8.811c-1.422-.965-4-3.073-4-4.811 0-.601.195-2 2-2 .449 0 1 .552 1 1a1 1 0 0 0 2 0c0-.448.551-1 1-1 1.805 0 2 1.399 2 2 0 1.738-2.578 3.846-4 4.811z" />
    </G>
  </Svg>
);

export default SvgComponent;
