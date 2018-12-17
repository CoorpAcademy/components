import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM8.502 10.75H5.003v.875h2.624v1.748H5.003v.875h3.499v1.75H4.128a.874.874 0 0 1-.874-.875V9.875c0-.484.391-.875.874-.875h4.374v1.75zM14.625 16h-1.968l-.656-1.399L11.345 16H9.377l1.64-3.499-1.64-3.499h1.968l.656 1.4.656-1.4h1.968l-1.64 3.499L14.625 16zm6.123-5.25h-3.499v.875h2.625v1.748h-2.625v.875h3.499v1.75h-4.373a.875.875 0 0 1-.875-.875V9.875c0-.484.391-.875.875-.875h4.373v1.75z"
    />
  </Svg>
);

export default SvgComponent;
