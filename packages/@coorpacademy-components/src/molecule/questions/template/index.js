import React from 'react';
import PropTypes from 'prop-types';
import DropDown from '../../questions/drop-down';
import FreeText from '../../questions/free-text';
import style from './style.css';

const Template = props => {
  const {template, answers} = props;

  const totalTemplate = {template};

  const transform = (template) => {

    return //tableau
  };

  //tableau
  [
    {
      type: 'string',
      value: 'la réponse est'
    },
    {
      type: 'answer',
      value: 'inp81'
    },
    {
      type: 'string',
      value: ' '
    },
    {
      type: 'answer',
      value: 'sel79'
    }
  ]

  // Affichage
  // map(tableau) ==> if (string) {value} 
  //  if(answer) ==> va dans props(answers) celui qui correspond à la 'value' + afficher via type

    // props : réponse, phrase

    // récupérer template global
    // le décomposer ==> récupérer les réponses "{{n}}"
    // ==> récupérer text simple "sldfjsdlk"
    // tout réafficher en dom


  // const freeTextView = templatefreetext && !templatedropdown
  //   ? <div>Metuentes igitur idem latrones Lycaoniam magna parte <FreeText {...props} />.</div>
  //   : null;
  // const dropDownView = templatedropdown && !templatefreetext
  //   ? <div>Metuentes igitur idem latrones Lycaoniam magna parte <DropDown {...props} />.</div>
  //   : null;
  // const mixedView = templatefreetext && templatedropdown
  //   ? <div>
  //       Metuentes igitur idem latrones Lycaoniam magna parte <FreeText {...props} /> campestrem cum <DropDown {...props} />.
  //     </div>
  //   : null;

  return (
    <div className={style.wrapper}>
      
    </div>
  );
};

const TextPropTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
const DropDownPropTypes = {
  name: PropTypes.string,
  onChange: Select.propTypes.onChange,
  options: Select.propTypes.options
};

Template.propTypes = {
  template: PropTypes.string,
  answers: PropTypes.oneOfType([
    PropTypes.shape(DropDownPropTypes),
    PropTypes.shape(TextPropTypes)
  ])
};

// Template.propTypes = {
//   templatefreetext: PropTypes.bool,
//   templatedropdown: PropTypes.bool
// };

export default Template;
