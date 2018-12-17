import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M19.387 5.082a1.009 1.009 0 0 0-1.088.206c-.035.035-.47.439-1.299.845V2a.997.997 0 0 0-.613-.918 1.009 1.009 0 0 0-1.088.206C15.227 1.358 13.492 3 10 3S4.774 1.358 4.708 1.293A.999.999 0 0 0 3 2v9c0 1.141.563 2.781 3.029 4.315.315 3.735 6.03 5.459 6.7 5.647a.974.974 0 0 0 .542.001C13.959 20.769 20 18.958 20 15V6a.998.998 0 0 0-.613-.918zM6.618 5.076C6.245 5.23 6 5.596 6 6v6.824c-.572-.523-1-1.138-1-1.824V3.865C6.121 4.436 7.79 5 10 5s3.88-.564 5-1.135v2.929A9.89 9.89 0 0 1 13 7C9.509 7 7.774 5.358 7.708 5.293a.998.998 0 0 0-1.09-.217zM18 15c0 1.955-3.452 3.461-5.001 3.955C11.451 18.464 8 16.962 8 15V7.865C9.121 8.436 10.79 9 13 9s3.88-.564 5-1.135V15z" />
      <Circle cx={11} cy={11.5} r={1} />
      <Circle cx={15} cy={11.5} r={1} />
      <Path d="M12 14h-2c0 1.654 1.346 3 3 3s3-1.346 3-3h-2c0 .551-.449 1-1 1s-1-.449-1-1z" />
    </G>
  </Svg>
);

export default SvgComponent;
