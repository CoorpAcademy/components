import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M10 18H2V8h15.999l-.001 3H20V5c0-1.102-.896-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h8v-2z"
      fill="currentColor"
    />
    <Path
      d="M18 24c-.178 0-.355-.048-.515-.142C16.924 23.521 12 20.466 12 17c0-2.393 1.607-4 4-4 .735 0 1.451.332 2 .846.549-.513 1.265-.846 2-.846 2.393 0 4 1.607 4 4 0 3.466-4.924 6.521-5.485 6.858-.16.095-.337.142-.515.142zm-2-9c-1.805 0-2 1.398-2 2 0 1.738 2.578 3.846 4 4.811 1.422-.965 4-3.073 4-4.811 0-.602-.195-2-2-2-.449 0-1 .552-1 1a1 1 0 1 1-2 0c0-.447-.551-1-1-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
