import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const SvgComponent = props => (
  <Svg viewBox="0 0 384 512" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <G clipPath="url(#prefix__clip0_1324_1764)">
      <Path
        d="M64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zm192 0v128h128L256 0zM112 256h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64h160c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        fill={props.color}
      />
    </G>
    <Defs>
      <ClipPath id="prefix__clip0_1324_1764">
        <Path fill="#fff" d="M0 0h384v512H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgComponent;