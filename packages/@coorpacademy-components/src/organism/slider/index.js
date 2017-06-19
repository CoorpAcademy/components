import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import _map from 'lodash/fp/map';
import ArrowRight from '@coorpacademy/nova-icons/composition/navigation/arrow-right';
import ArrowLeft from '@coorpacademy/nova-icons/composition/navigation/arrow-left';
import style from './style.css';

const map = _map.convert({cap: false});
const Hammer = typeof window !== 'undefined' ? require('hammerjs') : undefined;

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0
    };
    this.interval = 8000;
    this.handleNextSlide = this.handleNextSlide.bind(this);
    this.handlePreviousSlide = this.handlePreviousSlide.bind(this);
    this.autoPlay = this.autoPlay.bind(this);
    this.setSlider = this.setSlider.bind(this);
  }

  componentDidMount() {
    if (Hammer) {
      this.hammer = new Hammer(this.slider);
      this.hammer.on('swipeleft', this.handlePreviousSlide);
      this.hammer.on('swiperight', this.handleNextSlide);
    }

    this.autoPlay();
  }

  componentWillUnmount() {
    if (this.hammer) {
      this.hammer.stop();
      this.hammer.destroy();
    }
    this.hammer = null;
    clearTimeout(this.timer);
  }

  setSlider(el) {
    this.slider = el;
  }

  handleNextSlide() {
    this.setState(prevState => {
      const totalSlide = this.props.children.length;
      const nextSlide = prevState.currentSlide + 1;

      return {
        currentSlide: nextSlide >= totalSlide ? 0 : nextSlide
      };
    });

    this.autoPlay();
  }

  handlePreviousSlide() {
    this.setState(prevState => {
      const totalSlide = this.props.children.length;
      const nextSlide = prevState.currentSlide - 1;

      return {
        currentSlide: nextSlide < 0 ? totalSlide - 1 : nextSlide
      };
    });

    this.autoPlay();
  }

  autoPlay() {
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.handleNextSlide();
      this.autoPlay();
    }, this.interval);
  }

  render() {
    const {children} = this.props;
    const totalSlide = children.length;

    const myslides = map((child, index) => {
      const isActive = this.state.currentSlide === index;

      return (
        <div key={index} className={isActive ? style.activeSlide : style.slide}>
          {child}
        </div>
      );
    }, children);

    const currentSlide = get(this.state.currentSlide, children);
    const controlColor = getOr(false, 'light', currentSlide) ? '#FFF' : '#000';
    const leftControl = totalSlide > 1
      ? <ArrowLeft
          className={style.leftControl}
          color={controlColor}
          onClick={this.handlePreviousSlide}
        />
      : null;

    const rightControl = totalSlide > 1
      ? <ArrowRight
          className={style.rightControl}
          color={controlColor}
          onClick={this.handleNextSlide}
        />
      : null;

    return (
      <div className={style.slidesWrapper} ref={this.setSlider}>
        {myslides}
        {leftControl}
        {rightControl}
      </div>
    );
  }
}

Slider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node)
};

export default Slider;
