import React from 'react';
import PropTypes from 'prop-types';
import {isEmpty, map, upperCase, size} from 'lodash/fp';
import Link from '../../../../../atom/link';
import ButtonMenuAction from '../../../../../molecule/button-menu-action';
import {COLORS} from '../../../../../variables/colors';
import Learner from './learner';
import Microlearning from './microlearning';
import Lives from './lives';
import style from './style.css'; // eslint-disable-line css-modules/no-unused-class

const HEADER_TYPE = {
  LEARNER: 'learner',
  MICROLEARNING: 'microlearning'
};

const STYLE_CHECKED = {
  icon: {
    position: 'right',
    faIcon: {
      name: 'check',
      color: COLORS.white,
      backgroundColor: COLORS.cm_primary_blue,
      size: 10,
      customStyle: {
        padding: '0px',
        height: '16px',
        width: '16px'
      }
    }
  },
  customStyle: {backgroundColor: COLORS.cm_blue_50},
  contentCustomStyle: {
    width: '100%',
    justifyContent: 'space-between'
  }
};

const buttonMenuActionProps = multiLangOptions => {
  const {currentLang = 'en', supportedLangs = [], onClick} = multiLangOptions;

  return {
    button: {
      type: 'text',
      label: upperCase(currentLang),
      'aria-label': `${currentLang}-button`,
      'data-name': 'button-multi-lang',
      onClick: () => null,
      icon: {
        position: 'left',
        faIcon: {
          name: 'globe',
          color: COLORS.neutral_700,
          size: 14
        }
      },
      customStyle: {
        width: 'fit-content',
        color: COLORS.neutral_500,
        fontWeight: 600
      },
      withChevron: true
    },
    menu: {
      buttons: map(
        ({code, label}) => ({
          ...(currentLang === code ? STYLE_CHECKED : {}),
          type: 'defaultLeft',
          onClick: () => onClick(code),
          label,
          'data-name': `${code}-button`,
          disabled: false
        }),
        supportedLangs
      )
    },
    menuWrapper: {
      customStyle: {maxHeight: '248px', width: '209px'}
    }
  };
};

const SlidesHeader = (props = {}, context = undefined) => {
  const {type, content, subcontent, lives, mode, multiLang} = props;

  return (
    <div data-name="slidesHeader" className={style.wrapper}>
      {type === HEADER_TYPE.LEARNER ? (
        <Learner content={content} subcontent={subcontent} mode={mode} />
      ) : null}
      {type === HEADER_TYPE.MICROLEARNING ? <Microlearning content={content} mode={mode} /> : null}
      {isEmpty(multiLang) || size(multiLang.supportedLangs) <= 1 ? null : (
        <ButtonMenuAction {...buttonMenuActionProps(multiLang)} />
      )}
      {lives ? <Lives count={lives.count} /> : null}
    </div>
  );
};

SlidesHeader.propTypes = {
  type: PropTypes.oneOf([HEADER_TYPE.LEARNER, HEADER_TYPE.MICROLEARNING]),
  content: PropTypes.shape({
    href: Link.propTypes.href,
    title: PropTypes.string.isRequired,
    details: PropTypes.string
  }),
  subcontent: PropTypes.shape({
    title: PropTypes.string,
    details: PropTypes.string
  }),
  lives: PropTypes.shape(Lives.propTypes),
  mode: PropTypes.string,
  multiLang: PropTypes.shape({
    onClick: PropTypes.func,
    currentLang: PropTypes.string,
    supportedLangs: PropTypes.arrayOf(
      PropTypes.shape({
        code: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
      })
    )
  })
};

export default SlidesHeader;
