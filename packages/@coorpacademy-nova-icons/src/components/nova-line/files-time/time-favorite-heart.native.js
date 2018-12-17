import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10 8.465V4H8v5.535l3.445 2.297 1.11-1.664z" />
      <Path d="M2 9c0-3.86 3.14-7 7-7 3.859 0 7 3.14 7 7 0 .695-.105 1.366-.295 2h2.063A8.97 8.97 0 0 0 18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9c.338 0 .671-.022 1-.059V15.92c-.328.047-.66.08-1 .08-3.86 0-7-3.14-7-7z" />
      <Path d="M20 13c-.735 0-1.452.332-2 .846-.548-.514-1.265-.846-2-.846-2.393 0-4 1.607-4 4 0 3.467 4.924 6.521 5.485 6.858a1.002 1.002 0 0 0 1.03 0C19.076 23.521 24 20.467 24 17c0-2.393-1.607-4-4-4zm-2 8.811c-1.422-.965-4-3.072-4-4.811 0-.602.195-2 2-2 .449 0 1 .551 1 1a1 1 0 0 0 2 0c0-.449.551-1 1-1 1.805 0 2 1.398 2 2 0 1.738-2.578 3.846-4 4.811z" />
    </G>
  </Svg>
);

export default SvgComponent;
