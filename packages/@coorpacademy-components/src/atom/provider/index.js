import React from 'react';
import PropTypes from 'prop-types';
import defaultsDeep from 'lodash/fp/defaultsDeep';
import {SrcPropType, ColorPropType, HexPropType} from '../../util/proptypes';

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
    white: '#FFFFFF',
    black: '#14171A'
  }
};

const mergeSkin = (skin = {}) => defaultsDeep(skin, DEFAULT_SKIN);

class Provider extends React.Component {
  constructor(props, context) {
    const {history, skin, translate, Vimeo} = props;
    super(props, context);
    this.state = {history, skin: mergeSkin(skin), translate, Vimeo};
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
  common: PropTypes.objectOf(ColorPropType),
  images: PropTypes.shape({
    'logo-mobile': SrcPropType,
    logo: SrcPropType,
    'logo-email': SrcPropType,
    login: SrcPropType
  }),
  icons: PropTypes.objectOf(HexPropType),
  mod: PropTypes.objectOf(ColorPropType),
  courses: PropTypes.arrayOf(ColorPropType),
  texts: PropTypes.objectOf(ColorPropType)
});

const translateShape = PropTypes.func;

Provider.propTypes = {
  history: historyShape,
  skin: skinShape,
  translate: translateShape,
  children: PropTypes.element.isRequired,
  Vimeo: PropTypes.shape({
    common: PropTypes.func
  })
};

Provider.childContextTypes = {
  history: historyShape,
  skin: skinShape,
  translate: translateShape.isRequired,
  Vimeo: PropTypes.object
};

export default Provider;
