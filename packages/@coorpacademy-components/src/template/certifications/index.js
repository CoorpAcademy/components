import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Provider from '../../atom/provider';
import Title from '../../atom/title';
import Select from '../../atom/select';
import InputSwitch from '../../atom/input-switch';
import CertificationCard from '../../molecule/certification-card';
import style from './style.css';

const Certifications = (props, context) => {
  const {
    locales: {title, subtitle, tag, count},
    certifications,
    sorting
  } = props;
  const {translate} = context;

  const [showCompleted, setShowCompleted] = useState(true);

  const sortView =
    sorting !== undefined ? (
      <div data-name="choice">
        <Select {...sorting} aria-label="All courses sort" />
      </div>
    ) : null;

  const handleShowCompletedToggle = useCallback(() => {
    setShowCompleted(!showCompleted);
  }, [showCompleted, setShowCompleted]);

  return (
    <div className={style.backgroudnContainer}>
      <div className={style.container} data-name="Certifications">
        <Title
          title={title}
          subtitle={subtitle}
          type="form-group"
          titleSize="standard-light-weight"
          subtitleSize="standard-without-margin"
          icon={{
            iconName: 'wreath-laurel',
            iconColor: '#B87A00',
            borderRadius: '12px',
            backgroundColor: '#FFEECC'
          }}
        />
        <div className={style.sortSectionWrapper}>
          <div className={style.certificatesCount}>{count}</div>
          <div className={style.sortSection}>
            <InputSwitch
              id={'show-completed-courses-switch'}
              type="switch"
              name={translate('show_completed')}
              title={translate('show_completed')}
              aria-label={'Show completed courses aria label'}
              value={showCompleted}
              onChange={handleShowCompletedToggle}
            />
            {sorting ? (
              <div className={style.sortWrapper}>
                {translate('sort_by')}
                {sortView}
              </div>
            ) : null}
          </div>
        </div>
        <div className={style.certificateList}>
          {map(certification => {
            const {label, progress} = certification;
            if (!showCompleted && progress === 100) return null;

            return (
              <div key={label}>
                <CertificationCard {...certification} tag={tag} />
              </div>
            );
          }, certifications)}
        </div>
      </div>
    </div>
  );
};

Certifications.contextTypes = {
  translate: Provider.childContextTypes.translate
};

Certifications.propTypes = {
  certifications: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      goal: PropTypes.shape({
        title: PropTypes.string,
        condition: PropTypes.shape({
          nbDone: PropTypes.number
        })
      }),
      progress: PropTypes.number,
      imgUrl: PropTypes.string,
      onClick: PropTypes.func,
      locales: PropTypes.shape({
        conditionDescriptionProgress: PropTypes.string
      })
    })
  ),
  locales: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    tag: PropTypes.string,
    count: PropTypes.string
  }),
  sorting: PropTypes.shape(Select.propTypes)
};

export default Certifications;
