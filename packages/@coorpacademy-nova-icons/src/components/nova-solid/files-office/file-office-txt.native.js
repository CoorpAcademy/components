import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM9 15.5H7.5V20H6v-4.5H4.5V14H9v1.5zm5.5 4.5h-1.688l-.562-1.2-.562 1.2H10l1.406-3L10 14h1.688l.562 1.2.562-1.2H14.5l-1.406 3 1.406 3zm5-4.5H18V20h-1.5v-4.5H15V14h4.5v1.5zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
