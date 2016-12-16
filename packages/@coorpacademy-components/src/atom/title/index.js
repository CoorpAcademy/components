import Inferno from 'inferno';
import {checker, createValidate} from '../../util/validation';

const conditions = checker.shape({
  props: checker.none,
  children: checker.oneOrMore
});

const Title = ({children, ...props}) => {
  return (
    <h1>
      {children}
    </h1>
  );
};

Title.validate = createValidate(conditions);
export default Title;
