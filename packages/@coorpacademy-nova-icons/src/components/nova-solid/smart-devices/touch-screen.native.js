import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M16.57 22.001a1 1 0 0 0 .419-1.908c-1.519-.7-3.207-1.092-4.989-1.092s-3.471.392-4.989 1.092a1 1 0 0 0 .419 1.908h9.14zM20 2.001H4c-1.103 0-2 .896-2 2v12c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2zm-2.535 14l-4.243-1.415 1.414-1.414-3.535-3.535 1.414-1.414 2.828 2.828 2.829-1.414L21 12.465l-3.535 3.536z"
    />
  </Svg>
);

export default SvgComponent;
