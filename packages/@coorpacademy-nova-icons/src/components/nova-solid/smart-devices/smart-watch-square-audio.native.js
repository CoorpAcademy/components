import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 1.001a1 1 0 0 0-1-1H7.984A.983.983 0 0 0 7 .985v.016c0 3-3 2-3 6v10c0 4 3 3 3 6a1 1 0 0 0 1 1h8.016a.984.984 0 0 0 .984-.984v-.016c0-3 3-2 3-6v-10c0-4-3-3-3-6zm1 16c0 1.104-.897 2-2 2H8c-1.102 0-2-.896-2-2v-10c0-1.103.898-2 2-2h8c1.103 0 2 .897 2 2v10z" />
      <Path d="M14.141 8.034L9.766 9.46a.656.656 0 0 0-.454.623v2.779a1.313 1.313 0 1 0 1.312 1.313c0-.041-.019-.075-.023-.115h.023v-3.5l3.062-.998v2.426A1.312 1.312 0 1 0 15 13.3c0-.041-.019-.075-.023-.115H15V8.657a.656.656 0 0 0-.859-.623z" />
    </G>
  </Svg>
);

export default SvgComponent;
