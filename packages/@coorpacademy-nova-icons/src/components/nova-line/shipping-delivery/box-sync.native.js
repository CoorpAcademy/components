import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 8h16v1.994h2V7c0-.006-.004-.012-.004-.018a.99.99 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.039-.031-.081-.057-.118l-4-6A1.004 1.004 0 0 0 15 0H5c-.334 0-.646.168-.832.446l-4 6c-.025.037-.038.078-.057.117-.014.027-.028.052-.039.08a.994.994 0 0 0-.068.339C.004 6.988 0 6.994 0 7v12a1 1 0 0 0 1 1h9v-2H2V8zm15.131-2H11V2h3.465l2.666 4zM5.535 2H9v4H2.869l2.666-4z" />
      <Path d="M18 11.995c-3.309 0-6 2.691-6 6h2c0-2.205 1.795-4 4-4s4 1.795 4 4c0 2.206-1.795 4-4 4-1.041 0-2.019-.402-2.826-1.174L17 18.995h-5v5l1.757-1.757h.001A5.959 5.959 0 0 0 18 23.995c3.309 0 6-2.691 6-6s-2.691-6-6-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
