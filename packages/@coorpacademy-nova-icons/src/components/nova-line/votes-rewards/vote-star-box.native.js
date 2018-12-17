import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <Path
      d="M19 21.001H5c-1.104 0-2-.897-2-2v-14c0-1.103.896-2 2-2h14c1.104 0 2 .897 2 2v14c0 1.103-.896 2-2 2zm-14-16v14h13.997l.003-14H5z"
      fill="currentColor"
    />
    <Path
      fill="currentColor"
      d="M12 6.001l1.714 4H18l-3.708 3.416 1.993 4.584L12 15.166l-4.286 2.835 1.994-4.584L6 10.001h4.285z"
    />
  </Svg>
);

export default SvgComponent;
