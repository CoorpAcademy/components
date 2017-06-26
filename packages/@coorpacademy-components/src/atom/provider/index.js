import React from 'react';
import PropTypes from 'prop-types';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import * as CustomPropTypes from '../../util/proptypes';

const DEFAULT_SKIN = {
  common: {
    brand: '#00B0FF',
    primaryAdd1: '#B3E5FC',
    primaryAdd2: '#0091EA',
    primaryAdd3: '#0277BD',
    primaryAdd4: '#015798',
    xtraLightGrey: '#FAFAFA',
    light: '#ECEFF1',
    medium: '#90A4AE',
    dark: '#546E7A',
    grey: '#607D8B',
    orangeAdd: '#FF7043',
    orange: '#FFA000',
    positive: '#3EC483',
    lightGreen: '#66BB6A',
    negative: '#F73F52',
    battle: '#FFE100',
    white: '#fff',
    black: '#14171'
  }
};

const mergeSkin = (skin = {}) => defaultsDeep(skin, DEFAULT_SKIN);

class Provider extends React.Component {
  constructor(props, context) {
    const {history, skin, translate} = props;
    super(props, context);
    this.state = {history, skin: mergeSkin(skin), translate};
  }

  getChildContext() {
    return this.state;
  }

  componentWillReceiveProps(nextProps) {
    const {history, skin, translate} = nextProps;
    this.setState({
      history,
      skin: mergeSkin(skin),
      translate
    });
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

const historyShape = PropTypes.shape({
  createHref: PropTypes.func,
  push: PropTypes.func
});

const skinShape = PropTypes.shape({
  common: PropTypes.objectOf(CustomPropTypes.color),
  images: PropTypes.shape({
    'logo-mobile': CustomPropTypes.url,
    logo: CustomPropTypes.url,
    'logo-email': CustomPropTypes.url,
    login: CustomPropTypes.url
  }),
  icons: PropTypes.objectOf(CustomPropTypes.hex),
  mod: PropTypes.objectOf(CustomPropTypes.color),
  courses: PropTypes.arrayOf(CustomPropTypes.color),
  texts: PropTypes.objectOf(CustomPropTypes.color)
});

const translateShape = PropTypes.func;

Provider.propTypes = {
  history: historyShape,
  skin: skinShape,
  translate: translateShape,
  children: PropTypes.element.isRequired
};

Provider.childContextTypes = {
  history: historyShape,
  skin: skinShape,
  translate: translateShape.isRequired
};

export default Provider;
