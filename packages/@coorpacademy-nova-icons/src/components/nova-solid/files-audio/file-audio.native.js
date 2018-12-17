import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.414 1.007H5c-1.103 0-2 .897-2 2v18c0 1.104.897 2 2 2h14c1.103 0 2-.896 2-2V5.593l-4.586-4.586zM13 19.009l-3-2H7v-4h3l3-2v8zm2.707-1.293l-1.414-1.414c.283-.288.707-.902.707-1.293 0-.392-.424-1.005-.71-1.296l1.417-1.41c.132.133 1.293 1.332 1.293 2.706 0 1.374-1.161 2.574-1.293 2.707zM15 7.007v-5l5 5h-5z"
    />
  </Svg>
);

export default SvgComponent;
