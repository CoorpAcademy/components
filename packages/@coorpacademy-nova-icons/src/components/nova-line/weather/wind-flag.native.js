import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22.443 7.701L9.299 2.443a1.864 1.864 0 0 0-.692-.138C7.691 2.305 7 3.035 7 4v10c0 .967.691 1.695 1.607 1.695.23 0 .463-.045.692-.138L22.442 10.3c.914-.366 1.012-1.031 1.012-1.3 0-.269-.098-.934-1.011-1.299zM15 6.878v4.245l-2 .8V6.078l2 .8zm-6 6.645V4.478l2 .8v7.446l-2 .799zm8-3.2V7.678l3.305 1.323L17 10.323zM4 2h2v20H4z" />
    </G>
  </Svg>
);

export default SvgComponent;
