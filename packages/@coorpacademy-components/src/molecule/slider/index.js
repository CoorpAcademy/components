import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
import getOr from 'lodash/fp/getOr';
import _map from 'lodash/fp/map';
import Slide from '../../atom/slide';
import style from './style.css';

const map = _map.convert({cap: false});
const Hammer = (typeof window !== 'undefined') ? require('hammerjs') : undefined;

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
    this.ref = this.ref.bind(this);
  }

  componentDidMount() {
    if (Hammer && this.element) {
      this.hammer = new Hammer(this.element);
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

  ref(element) {
    this.element = element;
  }

  handleNextSlide() {
    this.setState(prevState => {
      const totalSlide = this.props.slides.length;
      const nextSlide = prevState.currentSlide + 1;

      return {
        currentSlide: nextSlide >= totalSlide ? 0 : nextSlide
      };
    });

    this.autoPlay();
  }

  handlePreviousSlide() {
    this.setState(prevState => {
      const totalSlide = this.props.slides.length;
      const nextSlide = prevState.currentSlide - 1;

      return {
        currentSlide: nextSlide < 0 ? (totalSlide - 1) : nextSlide
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
    const {
      slides
    } = this.props;

    const totalSlide = slides.length;

    const myslides = map((slide, index) => {
      const isActive = this.state.currentSlide === index;

      return (
        <div key={index}
          className={isActive ? style.activeSlide : style.slide}
        >
          <Slide {...slide} />
        </div>
      );
    }, slides);

    const currentSlide = get(this.state.currentSlide, slides);
    const controlColor = getOr(false, 'light', currentSlide) ? '#FFF' : '#000';
    const leftControl = totalSlide > 1 ? (
      <span className={style.leftControl}
        style={{color: controlColor}}
        onClick={this.handlePreviousSlide}
      />
    ) : null;

    const rightControl = totalSlide > 1 ? (
      <span className={style.rightControl}
        style={{color: controlColor}}
        onClick={this.handleNextSlide}
      />
    ) : null;

    return (
      <div
        ref={this.ref}
        className={style.slidesWrapper}
      >
        {myslides}
        {leftControl}
        {rightControl}
      </div>
    );
  }
}

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    surtitle: PropTypes.string,
    cta: PropTypes.shape({
      href: PropTypes.url,
      title: PropTypes.string
    })
  }))
};

export default Slider;
