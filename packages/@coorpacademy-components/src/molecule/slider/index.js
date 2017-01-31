import React, {PropTypes} from 'react';
import Slide from '../../atom/slide';
import style from './style.css';

const Slider = props => {
  const {
    slides
  } = props;

  const totalSlide = slides.length;

  const MoveSlide = React.createClass({
    getInitialState: function () {
      return {countSlide: 1};
    },

    reset: function() {this.replaceState(this.getInitialState())},

    increment: function () {
      this.setState({countSlide: this.state.countSlide + 1});
      if (this.state.countSlide >= totalSlide) {
        this.reset();
      };
    },

    decrement: function () {
      this.setState({countSlide: this.state.countSlide - 1});
      if (this.state.countSlide <= 1) {
        console.log("foo");
        this.reset();
      };
    },

    render: function() {
      const indexSlides = this.state.countSlide;
      return(
        <div className={style.controls}>
         <span className={style.leftControl} onClick={this.increment} />
         {indexSlides}
         <span className={style.rightControl}  onClick={this.decrement} />
       </div>
      );
    }
  });

  const myslides = slides.map((slide, index) => {
    return (
      <li><Slide {...slides[index]} /></li>
    );
  });

  const viewCtrls = totalSlide === 1 ? null : (<MoveSlide />);

  return (
    <div className={style.slidesWrapper}>
      <ul className={style.slidecontent}>
        {myslides}
      </ul>
      {viewCtrls}
    </div>
  );
};

Slider.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.shape({
    cover: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    cta: PropTypes.shape({
      href: PropTypes.url,
      title: PropTypes.string
    })
  }))
};

export default Slider;
