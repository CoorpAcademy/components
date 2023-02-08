import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {get, keys} from 'lodash/fp';
import {
  NovaCompositionCoorpacademyFilterVideo2 as MediaIcon,
  NovaCompositionCoorpacademyClue as ClueIcon,
  NovaCompositionCoorpacademyMap as ContextIcon,
  NovaCompositionCoorpacademyChat as CoachIcon,
  NovaCompositionCoorpacademyListBullets3 as QuestionIcon
} from '@coorpacademy/nova-icons';
import Provider from '../../../../../atom/provider';
import style from './style.css';

const TABS = {
  question: {
    icon: QuestionIcon
  },
  media: {
    icon: MediaIcon
  },
  clue: {
    icon: ClueIcon
  },
  coach: {
    icon: CoachIcon,
    className: style.coach
  },
  context: {
    icon: ContextIcon
  }
};

class Button extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    notify: PropTypes.bool,
    selected: PropTypes.bool,
    highlighted: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.oneOf(keys(TABS)).isRequired,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onClick: PropTypes.func
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      hovered: false
    };
  }

  handleMouseEnter = () => {
    const {onMouseEnter} = this.props;

    this.setState(prevState => ({
      hovered: true
    }));
    onMouseEnter && onMouseEnter();
  };

  handleMouseLeave = () => {
    const {onMouseLeave} = this.props;
    this.setState(prevState => ({
      hovered: false
    }));

    onMouseLeave && onMouseLeave();
  };

  render() {
    const {skin} = this.context;
    const {hovered} = this.state;
    const grey = get('common.grey', skin);
    const primaryColor = get('common.primary', skin);
    const {disabled, notify, selected, highlighted, title, type, onClick} = this.props;
    const colorIcon = selected ? primaryColor : grey;
    const selectedColor = (selected && {borderTopColor: primaryColor}) || {};

    const hoverStyle =
      !disabled && hovered
        ? {
            borderTopColor: primaryColor
          }
        : {};

    const IconType = get([type, 'icon'], TABS);
    const className = classnames(
      style.button,
      get([type, 'className'], TABS),
      selected && style.selected,
      disabled && style.disabled
    );

    const notifyView = notify ? <span className={style.notify} /> : null;
    return (
      <div
        data-name={`button`}
        data-type={type}
        data-selected={selected}
        data-disabled={disabled}
        className={className}
        onClick={onClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={{
          ...hoverStyle,
          ...selectedColor
        }}
      >
        <div className={highlighted ? style.highlighted : style.logo}>
          {notifyView}
          <IconType
            style={{
              color: colorIcon
            }}
            height={30}
          />
        </div>
        <div data-name="title" className={style.title}>
          {title}
        </div>
      </div>
    );
  }
}

const SlidesFooter = props => {
  const {buttons = []} = props;
  if (buttons.length === 0) return null;

  const Buttons = buttons.map((button, key) => {
    return <Button {...button} key={key} />;
  });

  return (
    <div data-name="slidesFooter" className={style.wrapper}>
      {Buttons}
    </div>
  );
};

SlidesFooter.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      disabled: PropTypes.bool,
      notify: PropTypes.bool,
      selected: PropTypes.bool,
      highlighted: PropTypes.bool,
      title: PropTypes.string,
      type: PropTypes.oneOf(keys(TABS)).isRequired,
      onMouseEnter: PropTypes.func,
      onMouseLeave: PropTypes.func,
      onClick: PropTypes.func
    })
  )
};

export default SlidesFooter;
