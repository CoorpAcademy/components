import {checker, createValidate} from '../../../util/validation';
import createHeader from '../../../organism/setup-header';
import style from './style.css';

const conditions = checker.shape({
  props: checker.shape({
    header: checker.object
  }),
  children: checker.none
});

export default (treant, options) => {
  const {h} = treant;
  const Header = createHeader(treant, options);

  const Layout = Template => (props, children) => (
    <div className={style.default}>
      <Header {...props.header}/>
      <Template {...props}/>
    </div>
  );

  Layout.validate = createValidate(conditions);
  return Layout;
};
