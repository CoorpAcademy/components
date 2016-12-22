import React, {PropTypes} from 'react';
import Header from '../../../organism/setup-header';
import style from './style.css';

// const conditions = checker.shape({
//   props: checker.shape({
//     header: checker.object
//   })
// });

const Layout = Template => {
  return props => (
    <div className={style.container}>
      <Header {...props.header}/>
      <div className={style.contentWrapper}>
        <Template {...props}/>
      </div>
    </div>
  );
};

// Layout.validate = createValidate(conditions);
export default Layout;
