import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/fp';
import Accordion from '../../organism/accordion/toggler';
import Select from '../../atom/select';
import InputReadonly from '../../atom/input-readonly';
import InputText from '../../atom/input-text';
import InputCheckbox from '../../atom/input-checkbox';
import InputDoublestep from '../../atom/input-doublestep';
import InputSwitch from '../../atom/input-switch';
import InputFileDraggable from '../../atom/input-file-draggable';
import SetupCohortItem from '../setup-cohort-item';
import MessagePopin from '../message-popin';
import BrandDownloadBox from '../brand-download-box';
import Title from '../../atom/title';
import style from './style.css';

const SetupSlider = props => {
  const {tabProps = [], slides = []} = props;
  const buildSlides = slides_ => {
    return map.convert({cap: false})((slide, key) => {
      const buildInput = field => {
        const {type, ...rest} = field;
        switch (type) {
          case 'switch':
            return <InputSwitch {...field} />;
          case 'select':
            return <Select {...field} theme={'coorpmanager'} />;
          case 'checkbox':
            return <InputCheckbox {...field} />;
          case 'image':
            return (
              <div className={style.imageUploadContainer}>
                <InputFileDraggable {...field} />
              </div>
            );
          case 'splitForm':
            return <SetupCohortItem field={field} />;
          case 'alert':
            return <MessagePopin header={field.title} content={field.subtitle} />;
          case 'readonly':
            return <InputReadonly {...field} />;
          case 'doublestep':
            return <InputDoublestep {...field} />;
          case 'downloadbox':
            return <BrandDownloadBox {...field} />;
          case 'form-group':
            return <Title {...field} />;
          case 'slider':
            return (
              <Accordion tabProps={field.tabProps} type={'all'} theme={'setup'}>
                {buildSlides(field.slides)}
              </Accordion>
            );
          case 'text':
          case 'password':
            return <InputText {...field} />;
          default:
            return <InputText {...rest} type={'text'} />;
        }
      };

      const buildField = (field, index) => {
        const input = buildInput(field);
        return (
          <div className={style.field} key={index}>
            {input}
          </div>
        );
      };

      const fieldsList = map.convert({cap: false})(buildField, slide.fields);

      return (
        <div className={style.wrapper} key={key}>
          {fieldsList}
        </div>
      );
    }, slides_);
  };

  const slidesView = buildSlides(slides);

  return (
    <div className={style.wrapperStyle}>
      <Accordion tabProps={tabProps} type={'all'} theme={'setup'}>
        {slidesView}
      </Accordion>
    </div>
  );
};

const SlidePropTypes = PropTypes.shape({
  fields: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.shape({
        ...SetupSlider.propTypes,
        type: PropTypes.oneOf(['slider'])
      }),
      PropTypes.shape({
        ...InputSwitch.propTypes,
        type: PropTypes.oneOf(['switch'])
      }),
      PropTypes.shape({
        ...Select.propTypes,
        type: PropTypes.oneOf(['select'])
      }),
      PropTypes.shape({
        ...InputCheckbox.propTypes,
        type: PropTypes.oneOf(['checkbox'])
      }),
      PropTypes.shape({
        ...InputFileDraggable.propTypes,
        type: PropTypes.oneOf(['image'])
      }),
      PropTypes.shape({
        ...InputReadonly.propTypes,
        type: PropTypes.oneOf(['readonly'])
      }),
      PropTypes.shape({
        ...InputText.propTypes,
        type: PropTypes.oneOf(['text', 'password'])
      }),
      PropTypes.shape({
        ...InputDoublestep.propTypes,
        type: PropTypes.oneOf(['doublestep'])
      }),
      PropTypes.shape({
        ...SetupCohortItem.propTypes,
        type: PropTypes.oneOf(['splitForm'])
      }),
      PropTypes.shape({
        ...MessagePopin.propTypes,
        type: PropTypes.oneOf(['alert'])
      }),
      PropTypes.shape(InputText.propTypes),
      PropTypes.shape({
        ...BrandDownloadBox.propTypes,
        type: PropTypes.oneOf(['downloadbox'])
      })
    ])
  )
});

const SetupSliderPropTypes = {
  tabProps: PropTypes.arrayOf(PropTypes.shape(Accordion.propTypes)),
  slides: PropTypes.arrayOf(SlidePropTypes)
};

SetupSlider.propTypes = SetupSliderPropTypes;

export default SetupSlider;
