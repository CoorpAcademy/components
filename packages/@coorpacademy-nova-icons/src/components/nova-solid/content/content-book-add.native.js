import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill={props.color}>
      <Path d="M6 20h7.09a5.978 5.978 0 01-.09-1 5.997 5.997 0 015-5.91V1a1 1 0 00-1-1H6v20zM4 .001H1a1 1 0 00-1 1v18a1 1 0 001 1h3v-20zM23 18h-3v-3h-2v3h-3v2h3v3h2v-3h3z" />
    </G>
  </Svg>
);

export default SvgComponent;
