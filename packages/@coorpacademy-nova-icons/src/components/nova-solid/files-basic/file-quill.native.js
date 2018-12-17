import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zm-2.318 15.133c-1.5 1.498-2.758 1.678-3.585 1.356L9 19H7l2.511-2.511c-.283-.725-.177-1.783.863-3.043L12 15.071v-3.053C14.092 10.675 17 10 17 10s-.968 4.196-2.904 6.133zM15 7V2l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
