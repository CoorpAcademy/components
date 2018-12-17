import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M10 18.001H6v-16h10v8.994h2V1.001a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h9v-2zm-6 0H2v-16h2v16z"
      fill="currentColor"
    />
    <Path
      d="M18 24.001c-.178 0-.355-.047-.515-.142-.561-.338-5.485-3.392-5.485-6.858 0-2.393 1.607-4 4-4 .735 0 1.451.332 2 .846.549-.514 1.265-.846 2-.846 2.393 0 4 1.607 4 4 0 3.466-4.924 6.521-5.485 6.858-.16.095-.337.142-.515.142zm-2-9c-1.805 0-2 1.398-2 2 0 1.738 2.578 3.846 4 4.811 1.422-.965 4-3.073 4-4.811 0-.602-.195-2-2-2-.449 0-1 .551-1 1a1 1 0 1 1-2 0c0-.449-.551-1-1-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
