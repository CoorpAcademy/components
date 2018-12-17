import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.002H0z" />
    <Path
      d="M21.708 8.293l-6-6a.999.999 0 0 0-1.414 0l-6 6c-.337.337-.39.866-.126 1.262l5.806 8.708A1.995 1.995 0 0 1 12 20c-1.104 0-2-.897-2-2 0-2.205-1.795-4-4-4s-4 1.795-4 4v4h2v-4a2 2 0 0 1 4 0c0 2.206 1.795 4 4 4 2.084 0 3.78-1.606 3.964-3.642l5.868-8.803a1 1 0 0 0-.124-1.262zM14 8h-2.586L14 5.414V8zm0 2v4.697L10.869 10H14zm2 0h3.132L16 14.697V10zm0-2V5.414L18.586 8H16z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
