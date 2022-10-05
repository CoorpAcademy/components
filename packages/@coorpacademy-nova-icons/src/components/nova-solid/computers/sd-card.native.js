import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill={props.color}
      d="M19.537 8.082L15.068 2.72A1.991 1.991 0 0013.531 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9.362c0-.466-.164-.921-.463-1.28zM10 6h2v3h-2V6zM7 6h2v3H7V6zm1.586 13L12 15.586 15.414 19H8.586z"
    />
  </Svg>
);

export default SvgComponent;
