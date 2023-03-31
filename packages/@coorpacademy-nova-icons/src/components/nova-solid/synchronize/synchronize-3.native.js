import * as React from 'react';
import Svg, {Path, G} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M6.351 6.351A7.939 7.939 0 0112 4c4.411 0 8 3.589 8 8h2c0-5.515-4.486-10-10-10a9.928 9.928 0 00-7.062 2.938L3 3v6h6L6.351 6.351zM17.649 17.649A7.937 7.937 0 0112 20c-4.411 0-8-3.589-8-8H2c0 5.515 4.486 10 10 10a9.927 9.927 0 007.062-2.938L21 21v-6h-6l2.649 2.649z" />
    </G>
  </Svg>
);

export default SvgComponent;
