import React from "react";
import Svg, { Path, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Circle cx={15} cy={5} r={2} fill="currentColor" />
    <Path
      d="M8.793 16.793L8 17.586 2.414 12l10-10H18v5.586l-2.207 2.207 1.414 1.414 2.5-2.5A.996.996 0 0 0 20 8V1a1 1 0 0 0-1-1h-7a.996.996 0 0 0-.707.293l-11 11a.999.999 0 0 0 0 1.414l7 7a.997.997 0 0 0 1.414 0l1.5-1.5-1.414-1.414z"
      fill="currentColor"
    />
    <Path
      d="M18 24a.997.997 0 0 1-.515-.143C16.924 23.521 12 20.467 12 17c0-2.393 1.607-4 4-4 .735 0 1.451.332 2 .846.549-.514 1.265-.846 2-.846 2.393 0 4 1.607 4 4 0 3.467-4.924 6.521-5.485 6.857A.997.997 0 0 1 18 24zm-2-9c-1.805 0-2 1.398-2 2 0 1.738 2.578 3.846 4 4.811 1.422-.965 4-3.072 4-4.811 0-.602-.195-2-2-2-.449 0-1 .551-1 1a1 1 0 1 1-2 0c0-.449-.551-1-1-1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
