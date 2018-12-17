import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6 14c0 2.617 2.86 5 6 5s6-2.383 6-5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm9.71 1c-.591 1.052-2.026 2-3.71 2-1.636 0-3.094-.951-3.701-2h7.411z" />
      <Path d="M21.524 9.026l.446-1.783A1 1 0 0 0 21 6h-1.022C18.152 3.576 15.261 2 12 2S5.848 3.576 4.022 6H3a1.001 1.001 0 0 0-.97 1.243l.446 1.783A9.829 9.829 0 0 0 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10a9.829 9.829 0 0 0-.476-2.974zM19.719 8l-.5 2H15V8h4.719zM12 4c2.018 0 3.854.762 5.263 2H14a1 1 0 0 0-1 1v1h-2V7a1 1 0 0 0-1-1H6.737A7.948 7.948 0 0 1 12 4zM9 8v2H4.781l-.5-2H9zm3 12c-4.411 0-8-3.589-8-8h6a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 1 1h6c0 4.411-3.589 8-8 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
