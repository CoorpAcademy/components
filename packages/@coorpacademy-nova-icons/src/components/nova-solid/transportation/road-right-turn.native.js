import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.002H0z" />
    <Path
      fill="currentColor"
      d="M21 7V5h1V3a1 1 0 0 0-1-1h-3C9.178 2 2 9.178 2 18v3a1 1 0 0 0 1 1h2v-1h2v1h2a1 1 0 0 0 1-1v-3c0-4.411 3.589-8 8-8h3a1 1 0 0 0 1-1V7h-1zM7.011 17.496l-1.998-.09c.058-1.288.305-2.553.734-3.76l1.885.67a10.981 10.981 0 0 0-.621 3.18zm2.146-6.039l-1.606-1.191a13.086 13.086 0 0 1 2.706-2.709l1.192 1.605a11.13 11.13 0 0 0-2.292 2.295zm5.149-3.822l-.671-1.883a12.949 12.949 0 0 1 3.758-.738l.093 1.998c-1.09.05-2.16.26-3.18.623z"
    />
  </Svg>
);

export default SvgComponent;
