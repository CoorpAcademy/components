import * as React from 'react';
import Svg, {Path, G, Circle} from 'react-native-svg';

const SvgComponent = props => (
  <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill={props.color}>
      <Path d="M10 0C4.486 0 0 4.486 0 10c0 5.515 4.486 10 10 10a9.939 9.939 0 006-2.018V15.25a8.025 8.025 0 01-2 1.668V14h2v-2h-2V8h3.736c.166.641.264 1.309.264 2 0 .692-.098 1.359-.264 2h2.063A10.05 10.05 0 0020 10c0-5.514-4.486-10-10-10zM6 16.918A8.044 8.044 0 013.082 14H6v2.918zM6 12H2.264A7.953 7.953 0 012 10c0-.691.098-1.359.264-2H6v4zm0-6H3.082A8.056 8.056 0 016 3.083V6zm6 11.737c-.641.166-1.309.263-2 .263s-1.359-.097-2-.263V14h4v3.737zM12 12H8V8h4v4zm0-6H8V2.264C8.641 2.098 9.309 2 10 2s1.359.098 2 .264V6zm2 0V3.083A8.056 8.056 0 0116.918 6H14zM20 14h2v6h-2z" />
      <Circle cx={21} cy={22} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
