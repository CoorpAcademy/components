import {omit} from 'lodash/fp';
import defaultProps from './default';

const propsWithoutButtonLink = omit('props.buttonLink', defaultProps);

export default propsWithoutButtonLink;
