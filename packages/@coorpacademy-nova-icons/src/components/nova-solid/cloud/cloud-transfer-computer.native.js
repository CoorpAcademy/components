import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M7 0v2H4a1 1 0 0 0-1 1v4H1l3 3 3-3H5V4h2v2l3-3-3-3zM16 13v2H2v-5H0v9c0 1.103.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.897 2-2v-6h-2zm-7 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM19.1 0c-1.634 0-3.092.816-3.986 2.105 1.115.365 1.949 1.491 2.158 1.98-.014.011-.82.593-.85.613-1.047-1.518-1.947-1.842-2.922-1.842-1.93 0-3.5 1.603-3.5 3.571C10 8.399 11.57 10 13.5 10h5.6c2.702 0 4.9-2.242 4.9-5 0-2.757-2.198-5-4.9-5z"
    />
  </Svg>
);

export default SvgComponent;
