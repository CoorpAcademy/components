import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M7 17c2.422 0 3.857-1.493 5-3.156C13.143 15.507 14.578 17 17 17c3.178 0 5-1.822 5-5 0-2.664-2.336-5-5-5-2.422 0-3.857 1.493-5 3.156C10.857 8.493 9.422 7 7 7c-2.664 0-5 2.336-5 5s2.336 5 5 5zm10-8c1.387 0 3 1.311 3 3 0 2.074-.926 3-3 3-1.664 0-2.613-1.121-3.816-3 1.203-1.879 2.152-3 3.816-3zM7 9c1.664 0 2.613 1.121 3.816 3C9.613 13.879 8.664 15 7 15c-1.387 0-3-1.311-3-3s1.613-3 3-3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
