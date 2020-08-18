import React from 'react';
import PropTypes from 'prop-types';

// import style from './style.css';

const socialLinksTypes = ['facebook', 'twitter', 'linkedIn'];

class MoocFooter extends React.Component {
  static propTypes = {
    headSection: PropTypes.shape({
      title: PropTypes.string,
      androidLink: PropTypes.string,
      iosLink: PropTypes.string
    }),
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
          type: PropTypes.oneOf(socialLinksTypes),
          link: PropTypes.string
        })
    ),
    sections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        links: PropTypes.arrayOf(PropTypes.shape({title: PropTypes.string, link: PropTypes.string}))
      })
    )
  };

  constructor(props) {
    super(props);
  }

  // eslint-disable-next-line class-methods-use-this
  render() {
    return <div>Just a plain test</div>;
  }
}

export default MoocFooter;
