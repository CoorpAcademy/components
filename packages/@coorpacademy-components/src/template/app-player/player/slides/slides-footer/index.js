import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import keys from 'lodash/fp/keys';
import MediaIcon from '@coorpacademy/nova-icons/composition/coorpacademy/filter-video2';
import ClueIcon from '@coorpacademy/nova-icons/composition/coorpacademy/clue';
import ContextIcon from '@coorpacademy/nova-icons/composition/coorpacademy/map';
import CoachIcon from '@coorpacademy/nova-icons/composition/coorpacademy/chat';
import QuestionIcon from '@coorpacademy/nova-icons/composition/coorpacademy/list-bullets-3';
import get from 'lodash/fp/get';
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
  constructor(props, context) {
    super(props, context);
  }

  state = {
    hovered: false
  };

  handleMouseEnter = () => {
    this.setState(prevState => ({
      hovered: true
    }));
    this.props.onMouseEnter && this.props.onMouseEnter();
  };

  handleMouseLeave = () => {
    this.setState(prevState => ({
      hovered: false
    }));

    this.props.onMouseLeave && this.props.onMouseLeave();
  };

  render() {
    const {skin} = this.context;
    const grey = get('common.grey', skin);
    const primaryColor = get('common.primary', skin);
    const {disabled, notify, selected, highlighted, title, type, onClick} = this.props;
    const colorIcon = selected ? primaryColor : grey;
    const selectedColor = selected && {borderTopColor: primaryColor};

    const hoverStyle =
      !disabled && this.state.hovered
        ? {
            borderTopColor: primaryColor
          }
        : null;

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
        data-name={`button-${title}`}
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
            color={colorIcon}
            size={30}
          />
        </div>
        <div data-name="title" className={style.title}>
          {title}
        </div>
      </div>
    );
  }
}

Button.contextTypes = {
  skin: Provider.childContextTypes.skin
};

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
