import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 22H4c-1.104 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.768L9.361 15h5.277l5.721-4.769A1.002 1.002 0 0 1 22 11v9c0 1.103-.896 2-2 2zM4 13.135V20h16.002L20 13.135l-4.359 3.634c-.18.149-.407.231-.641.231H9c-.234 0-.461-.082-.641-.231L4 13.135zM20 9h-2V4H6v5H4V2h16z"
      fill="currentColor"
    />
    <Path
      d="M12 13s4-2.909 4-5.064c0-2.047-3.111-2.936-4-.248C11.111 5 8 5.889 8 7.936 8 10.091 12 13 12 13z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
