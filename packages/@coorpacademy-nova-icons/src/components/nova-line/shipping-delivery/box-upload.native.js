import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 8h16v4h2V7c0-.007-.004-.012-.004-.018a.985.985 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.038-.031-.08-.057-.117l-4-6A1 1 0 0 0 15 0H5c-.334 0-.646.167-.832.445l-4 6c-.025.037-.038.079-.057.118-.013.027-.028.052-.039.08a.985.985 0 0 0-.068.339C.004 6.988 0 6.993 0 7v12a1 1 0 0 0 1 1h11v-2H2V8zm15.131-2H11V2h3.465l2.666 4zM5.535 2H9v4H2.869l2.666-4zM23.707 19.293L19 14.586l-4.707 4.707 1.414 1.414L18 18.414V24h2v-5.586l2.293 2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
