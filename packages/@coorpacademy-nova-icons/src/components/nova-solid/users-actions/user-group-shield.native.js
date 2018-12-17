import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M6.3 12.198a2.994 2.994 0 0 0 1.702-2.692c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.188.699 2.207 1.702 2.692-2.126.576-3.702 2.503-3.702 4.808v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2c0-2.305-1.576-4.232-3.702-4.808zM15.756 18.429a2.99 2.99 0 0 0 1.246-2.423c0-.465-.115-.9-.305-1.293a16.111 16.111 0 0 1-3.006-1.676c-1.506.158-2.689 1.421-2.689 2.969a2.99 2.99 0 0 0 1.246 2.423c-1.324.652-2.246 2.004-2.246 3.577v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.573-.921-2.925-2.246-3.577zM12.002-.014v7c0 3.813 3.797 5.579 5.804 5.98l.196.039.196-.039c2.007-.401 5.804-2.168 5.804-5.98v-7h-12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
