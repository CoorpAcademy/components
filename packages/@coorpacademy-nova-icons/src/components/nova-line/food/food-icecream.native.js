import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <Path
      d="M12 2C8.141 2 5 5.14 5 9v1a3 3 0 0 0 2.312 2.913l3.774 8.494a1 1 0 0 0 1.828 0l3.774-8.494A3 3 0 0 0 19 10V9c0-3.86-3.141-7-7-7zm0 16.538l-2.617-5.889c.221-.116.432-.249.617-.415.531.476 1.232.766 2 .766s1.469-.29 2-.766c.185.166.396.299.617.415L12 18.538zM17 10c0 .551-.449 1-1 1s-1-.449-1-1a1 1 0 1 0-2 0c0 .551-.449 1-1 1s-1-.449-1-1a1 1 0 1 0-2 0c0 .551-.449 1-1 1s-1-.449-1-1V9c0-2.757 2.243-5 5-5s5 2.243 5 5v1z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
