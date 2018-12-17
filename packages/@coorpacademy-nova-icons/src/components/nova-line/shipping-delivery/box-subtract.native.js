import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 8.006h16v9h2v-10c0-.008-.003-.012-.004-.019a.994.994 0 0 0-.068-.339c-.011-.028-.025-.053-.038-.08-.02-.038-.032-.08-.058-.117l-4-6A1 1 0 0 0 15 .006H5c-.334 0-.646.167-.832.445l-4 6c-.024.037-.038.08-.057.117-.013.028-.028.052-.039.08a.994.994 0 0 0-.068.339c0 .007-.004.012-.004.019v12a1 1 0 0 0 1 1h14v-2H2v-10zm15.132-2H11v-4h3.465l2.667 4zm-11.597-4H9v4H2.869l2.666-4zM17 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
