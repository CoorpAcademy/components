import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="#767676">
      <Path d="M22 7.729c0-.534-.208-1.037-.586-1.415l-2.121-2.122c-.756-.757-2.125-.708-2.776-.049L5.098 14.04l6.469 6.467 9.846-11.365c.379-.376.587-.879.587-1.413zm-10.538 9.846L8.03 14.143l9.848-8.537 2.072 2.172-8.488 9.797zM14 20h8v2h-8zM2.111 21h5.444l1.505-1.505-2.722-2.721z" />
    </G>
  </Svg>
);

export default SvgComponent;
