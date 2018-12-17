import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .007h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20.994 9.001a.993.993 0 0 0-.162-.555l-4-6A.999.999 0 0 0 16 2.001H8a.998.998 0 0 0-.832.445l-4 6a.993.993 0 0 0-.162.555H3v11c0 1.102.897 2 2 2h14c1.104 0 2-.898 2-2v-11h-.006zm-12.459-5H11v4H5.869l2.666-4zm3.465 15l-4-4h2v-4h4v4h2l-4 4zm1-11v-4h2.465l2.666 4H13z"
    />
  </Svg>
);

export default SvgComponent;
