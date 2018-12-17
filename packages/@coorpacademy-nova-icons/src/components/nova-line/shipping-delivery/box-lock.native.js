import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M2 8h16v1h2V7c0-.006-.004-.012-.004-.018a.99.99 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.04-.031-.081-.057-.118l-4-6A1.004 1.004 0 0 0 15 0H5c-.334 0-.646.168-.832.446l-4 6c-.025.037-.038.078-.057.118-.014.027-.028.051-.039.08a.984.984 0 0 0-.068.338C.004 6.988 0 6.994 0 7v12a1 1 0 0 0 1 1h11v-2H2V8zm15.131-2H11V2h3.465l2.666 4zM5.535 2H9v4H2.869l2.666-4z" />
      <Path d="M23 14.995c0-2.205-1.795-4-4-4s-4 1.795-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.104 0 2 .897 2 2h-4c0-1.103.896-2 2-2zm3 9h-6v-5h6v5z" />
      <Circle cx={19} cy={19} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
