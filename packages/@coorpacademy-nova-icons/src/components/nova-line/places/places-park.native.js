import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M22.898 15.56l-2.231-4.561H21a1 1 0 0 0 .923-1.386l-2.936-7a1.005 1.005 0 0 0-.918-.614h-.004a1 1 0 0 0-.919.607l-3 7a.998.998 0 0 0 .919 1.393h.431l-2.321 4.546a.998.998 0 0 0 .891 1.454h3v6H19v-6h3a1 1 0 0 0 .898-1.439zm-4.844-9.999l1.441 3.438h-.432a.998.998 0 0 0-.968.749.994.994 0 0 0-.967-.749h-.548l1.474-3.438zm-2.356 9.438l2.321-4.544a1.02 1.02 0 0 0 .077-.203c.017.064.04.127.069.188L20.396 15h-4.698zM11 13.999H1c-.552 0-1 .449-1 1v5a1 1 0 0 0 1 1h1v2h2v-2h4v2h2v-2h1a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1zm-1 5H2v-3h8v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
