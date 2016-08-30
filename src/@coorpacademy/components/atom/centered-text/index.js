import {checker, createValidate} from '../../util/validation';
import AlignCenterBehaviour from '../../behaviour/align/centered/';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

export default (treant, options = {}) => {
  const {h} = treant;

  const AlignCenter = AlignCenterBehaviour(treant, options);

  const CenteredText = ({title, categories, products}, children) => (
    <AlignCenter>
      <div>
        {children}
      </div>
    </AlignCenter>
  );

  CenteredText.validate = createValidate(conditions);
  return CenteredText;
};
