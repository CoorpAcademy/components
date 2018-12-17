import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <Path
      d="M20.954 8.546C20.721 6.004 18.602 4 16 4H8C5.398 4 3.279 6.004 3.046 8.546 1.332 8.771 0 10.226 0 12v5c0 1.103.896 2 2 2v1h2v-1h16v1h2v-1c1.104 0 2-.897 2-2v-5c0-1.774-1.332-3.229-3.046-3.454zm-1.968.313A3.493 3.493 0 0 0 17 12h-4V6h3a2.998 2.998 0 0 1 2.986 2.859zM8 6h3v6H7a3.493 3.493 0 0 0-1.986-3.141A2.998 2.998 0 0 1 8 6zm14 11H2v-5c0-.827.673-1.5 1.5-1.5S5 11.173 5 12v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5v5z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
