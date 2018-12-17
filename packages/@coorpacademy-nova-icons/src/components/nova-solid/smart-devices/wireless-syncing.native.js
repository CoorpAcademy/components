import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M10 19.001H2v-14h12v2h2v-3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v-3z"
    />
    <Path
      fill="currentColor"
      d="M8.883 12.852l-1.53-1.289a9.984 9.984 0 0 1 7.654-3.562 9.991 9.991 0 0 1 7.64 3.547l-1.527 1.291a7.992 7.992 0 0 0-6.112-2.838 7.988 7.988 0 0 0-6.125 2.851z"
    />
    <Path
      fill="currentColor"
      d="M18.208 15.602a3.97 3.97 0 0 0-3.202-1.601c-1.27 0-2.436.584-3.2 1.6l-1.6-1.201a5.956 5.956 0 0 1 4.8-2.399 5.95 5.95 0 0 1 4.802 2.402l-1.6 1.199zM12 17.001h6v5h-6z"
    />
  </Svg>
);

export default SvgComponent;
