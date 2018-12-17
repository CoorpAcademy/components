import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.002-.001h24.001V24H-.002z" />
    <Path
      d="M23.828 15.44A.998.998 0 0 0 23 15c0-2.765-2.926-5.024-6.591-4.994l1.298-1.3c.756-.754 1.172-1.715 1.172-2.706 0-.99-.416-1.952-1.172-2.708-1.568-1.568-3.846-1.568-5.414 0l-10 10A3.992 3.992 0 0 0 1.283 15H1a1.004 1.004 0 0 0-.929 1.372l2 5c.153.379.521.628.929.628h18c.408 0 .776-.249.929-.628l2-5a1 1 0 0 0-.101-.932zM17 12.035V14h2v-1.477c1.197.545 2 1.463 2 2.477h-9.586l2.385-2.385c.064-.033.135-.057.201-.087V14h2v-1.973c.166-.012.331-.027.5-.027.17 0 .334.021.5.035zM3.707 14.707L5 13.414l1.293 1.292 1.414-1.414L6.414 12 8 10.414l1.293 1.292 1.414-1.414L9.414 9 11 7.414l1.293 1.292 1.414-1.414L12.414 6l1.293-1.293c.785-.784 1.801-.784 2.586 0 .383.384.586.831.586 1.293 0 .462-.203.909-.586 1.292L8.586 15H3.459c.072-.101.154-.199.248-.293zM20.322 20H3.678l-1.201-3h19.047l-1.202 3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
