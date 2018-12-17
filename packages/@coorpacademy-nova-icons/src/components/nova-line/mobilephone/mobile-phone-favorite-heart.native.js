import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <Path
      d="M10 18H2v-2h8v-2H2V6h8v5h2V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.104.897 2 2 2h8v-2zM2 2h8v2H2V2zM18 24a.994.994 0 0 1-.515-.143C16.924 23.521 12 20.467 12 17c0-2.393 1.607-4 4-4 .735 0 1.452.332 2 .846.548-.514 1.265-.846 2-.846 2.393 0 4 1.607 4 4 0 3.467-4.924 6.521-5.485 6.857A.994.994 0 0 1 18 24zm-2-9c-1.805 0-2 1.398-2 2 0 1.738 2.578 3.846 4 4.811 1.422-.965 4-3.072 4-4.811 0-.602-.195-2-2-2-.449 0-1 .551-1 1a1 1 0 1 1-2 0c0-.449-.551-1-1-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
