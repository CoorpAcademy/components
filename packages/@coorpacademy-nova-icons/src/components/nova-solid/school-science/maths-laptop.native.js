import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v11.998h22V4zM8.5 10c0 .415-.335.75-.75.75H5.5v.75h3V13H4.75a.749.749 0 0 1-.75-.75V10a.75.75 0 0 1 .75-.75H7V8.5H4V7h3.75a.75.75 0 0 1 .75.75V10zm7.5 1h-2v2h-2v-2h-2V9h2V7h2v2h2v2zm4 2h-1.5V8.5H17V7h2.25a.75.75 0 0 1 .75.75V13zM23 17.02H1c-.737 0-1.114.648-.97 1.224l.757 3.031C1.034 22.258 1.985 23 3 23h18c1.016 0 1.967-.742 2.213-1.726l.757-3.031c.143-.575-.233-1.223-.97-1.223zm-1.728 3.768c-.022.087-.182.212-.272.212H3c-.092 0-.25-.123-.273-.213L2.281 19H9a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1h6.719l-.447 1.788z" />
    </G>
  </Svg>
);

export default SvgComponent;
