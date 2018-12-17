import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M22 6.001H2c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <Path d="M6.313 9.001H3.25v7h3.063a2.19 2.19 0 0 0 2.188-2.188 2.17 2.17 0 0 0-.449-1.313c.277-.366.448-.817.448-1.312a2.19 2.19 0 0 0-2.187-2.187zm0 5.25H5v-.875h1.313a.44.44 0 0 1 .438.438.439.439 0 0 1-.438.437zm0-2.625H5v-.875h1.313a.439.439 0 0 1 0 .875zM18.125 9.001H15.5v7h1.75v-1.75h.875c1.447 0 2.625-1.178 2.625-2.625s-1.178-2.625-2.625-2.625zm0 3.5h-.875v-1.75h.875a.876.876 0 0 1 0 1.75zM14.003 9.039a.875.875 0 0 0-.981.352L12 10.924 10.978 9.39a.876.876 0 0 0-1.603.486v6.125h1.75v-3.235l.147.221c.325.487 1.131.487 1.456 0l.147-.221v3.235h1.75V9.876a.874.874 0 0 0-.622-.837z" />
    </G>
  </Svg>
);

export default SvgComponent;
