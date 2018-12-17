import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002 0h24.001v24.001H-.002z" />
    <Path
      fill="currentColor"
      d="M19 6c-3.44 0-6.174-3.565-6.201-3.602-.378-.5-1.22-.5-1.598 0C11.174 2.435 8.44 6 5 6a1 1 0 0 0-1 1v7c0 3.808 6.763 7.479 7.534 7.885a.998.998 0 0 0 .932 0C13.237 21.479 20 17.808 20 14V7a1 1 0 0 0-1-1zm-6 11s1-3-1-3-1 3-1 3-3-2-2-4c0 0-1-.896-1-2s.896-2 2-2 2 1 2 1 .896-1 2-1 2 .896 2 2-1 2-1 2c1 2-2 4-2 4z"
    />
  </Svg>
);

export default SvgComponent;
