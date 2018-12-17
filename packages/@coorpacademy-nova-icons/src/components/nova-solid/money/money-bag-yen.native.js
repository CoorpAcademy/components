import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.361 7.132l3.011-1.205-.744-1.857-3.117 1.248L16.8 3.599a1 1 0 0 0-1.041-1.57L12 2.965l-3.758-.936A1 1 0 0 0 7.2 3.599l1.289 1.719L5.372 4.07l-.744 1.858 3.011 1.205C4.876 8.67 3 11.619 3 15c0 4.962 4.038 9 9 9s9-4.038 9-9c0-3.381-1.876-6.33-4.639-7.868zM15 14v2h-2v1h2v2h-2v1h-2v-1H9v-2h2v-1H9v-2h2l-2-4h2l1 2 1-2h2l-2 4h2z"
    />
  </Svg>
);

export default SvgComponent;
