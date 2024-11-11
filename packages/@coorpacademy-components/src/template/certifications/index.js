import React, {useState, useCallback} from 'react';
import PropTypes from 'prop-types';
import Provider from '../../atom/provider';
import Title from '../../atom/title';
import Select from '../../atom/select';
import InputSwitch from '../../atom/input-switch';
import CertificationCard from '../../molecule/certification-card';
import style from './style.css';

const Certifications = (props, context) => {
  const {certifications, sorting} = props;
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
    <div className={style.container}>
      <Title
        title={translate('certificates')}
        subtitle={translate('certificates_subtitle')}
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
        <div className={style.certificatesCount}>
          {`${certifications.length} ${translate('certificate(s)')}`}
        </div>
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
          <div className={style.sortWrapper}>
            {translate('sort_by')}
            {sortView}
          </div>
        </div>
      </div>
      <div className={style.certificateList}>
        {certifications.map(certification => {
          if (!showCompleted && certification.progress === 100) {
            return null;
          }
          return (
            <div key={certification.label}>
              <CertificationCard {...certification} />
            </div>
          );
        })}
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
      onClick: PropTypes.func
    })
  ),
  sorting: PropTypes.shape(Select.propTypes)
};

export default Certifications;
