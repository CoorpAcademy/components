import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 20H7.312l-.562-1.2-.562 1.2H4.5l1.406-3L4.5 14h1.688l.562 1.2.562-1.2H9l-1.406 3L9 20zm5 0h-3.75v-6h1.5v4.5H14V20zm5.5-4.5h-2.625a.376.376 0 0 0-.375.375c0 .206.169.375.375.375h.75c1.034 0 1.875.841 1.875 1.875S18.659 20 17.625 20H15v-1.5h2.625a.376.376 0 0 0 .375-.375.376.376 0 0 0-.375-.375h-.75A1.877 1.877 0 0 1 15 15.875c0-1.033.841-1.875 1.875-1.875H19.5v1.5zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
