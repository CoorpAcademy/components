import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="M20 16a2.996 2.996 0 0 1-2.467 2.945L15.766 16H16c2.205 0 4-1.794 4-4 0-2.205-1.795-4-4-4h-4.382L9.895 4.553A1.001 1.001 0 0 0 9 4H3c-.316 0-.613.15-.803.402a1.003 1.003 0 0 0-.155.885l3 10A1 1 0 0 0 6 16h1.234l-1.801 3H2v2h15c2.757 0 5-2.243 5-5h-2zM5.244 9h1.138l1.724 3.447A.998.998 0 0 0 9 13h7v-2H9.618L7.895 7.553A1.001 1.001 0 0 0 7 7H4.645l-.301-1h4.038l1.724 3.447A.998.998 0 0 0 11 10h5a2 2 0 0 1 0 4H6.744l-1.5-5zm4.322 7h3.867l1.801 3H7.766l1.8-3z"
      fill="currentColor"
    />
  </Svg>
);

export default SvgComponent;
