import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 8.006h16V14h2V7.006c0-.008-.004-.012-.004-.019a.994.994 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.038-.031-.08-.057-.117l-4-6A1.001 1.001 0 0 0 15 .006H5c-.334 0-.646.167-.832.445l-4 6c-.025.037-.038.08-.057.117-.013.028-.028.052-.039.08a.994.994 0 0 0-.068.339c0 .007-.004.012-.004.019v12a1 1 0 0 0 1 1h13v-2H2v-10zm15.131-2H11v-4h3.465l2.666 4zm-11.596-4H9v4H2.869l2.666-4zM24 19h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
