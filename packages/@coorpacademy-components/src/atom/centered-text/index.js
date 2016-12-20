import React from 'react';
import {checker, createValidate} from '../../util/validation';
// import AlignCenterBehaviour from '../../behaviour/align/centered/';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

const CenteredText = ({children, ...props}) => {
  // const AlignCenter = AlignCenterBehaviour(treant, options);

  return (
      <div>
        {children}
      </div>
  );
};

CenteredText.validate = createValidate(conditions);
export default CenteredText;
