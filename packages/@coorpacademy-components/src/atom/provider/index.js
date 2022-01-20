import React from 'react';
import PropTypes from 'prop-types';
import {defaultsDeep} from 'lodash/fp';
import {SrcPropType, ColorPropType, HexPropType} from '../../util/proptypes';

const DEFAULT_SKIN = {
  common: {
    good: '#24b694',
    bad: '#ed1c24',
    primary: '#00B0FF',
    life: '#ed1c24',
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

const mergeSkin = (skin = {}) => defaultsDeep(DEFAULT_SKIN, skin);

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

class Provider extends React.Component {
  static propTypes = {
    history: historyShape,
    skin: skinShape,
    translate: translateShape,
    children: PropTypes.node.isRequired,
    Vimeo: PropTypes.shape({
      common: PropTypes.func
    })
  };

  static childContextTypes = {
    history: historyShape,
    skin: skinShape,
    translate: translateShape.isRequired,
    Vimeo: PropTypes.object
  };

  static getDerivedStateFromProps(props) {
    const {history, skin, translate} = props;

    return {
      history,
      skin: mergeSkin(skin),
      translate
    };
  }

  constructor(props, context) {
    super(props, context);
    const {history, skin, translate, Vimeo} = props;
    // eslint-disable-next-line react/no-unused-state
    this.state = {history, skin: mergeSkin(skin), translate, Vimeo};
  }

  getChildContext() {
    return this.state;
  }

  render() {
    const {children} = this.props;
    return React.Children.only(children);
  }
}

export default Provider;
