import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.361 7.132l3.011-1.205-.744-1.857-3.117 1.248L16.8 3.599a1 1 0 0 0-1.041-1.57L12 2.965l-3.758-.936A1 1 0 0 0 7.2 3.599l1.289 1.719L5.372 4.07l-.744 1.858 3.011 1.205C4.876 8.67 3 11.619 3 15c0 4.962 4.038 9 9 9s9-4.038 9-9c0-3.381-1.876-6.33-4.639-7.868zM14 12c-1.157 0-2.491.386-2.879 2H14v2h-2.879c.388 1.613 1.722 2 2.879 2v2c-2.183 0-4.494-1.077-4.923-4H8v-2h1.077c.429-2.922 2.74-4 4.923-4v2z"
    />
  </Svg>
);

export default SvgComponent;
