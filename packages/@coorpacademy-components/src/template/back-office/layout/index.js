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
    <div className={style.container}>
      <Header {...props.header}/>
      <div className={style.contentWrapper}>
        <Template {...props}/>
      </div>
    </div>
  );

  Layout.validate = createValidate(conditions);
  return Layout;
};
