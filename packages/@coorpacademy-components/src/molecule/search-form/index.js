import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/fp/get';
// import noop from 'lodash/fp/noop';
import ClearIcon from '@coorpacademy/nova-icons/composition/navigation/more';
import Search from '../search';
import style from './style.css';

const SearchForm = (props, context) => {
  const {action, method, onSubmit, onReset, search, onSearchFocus, onSearchBlur} = props;
  const handleSubmit = evt => {
    evt.preventDefault();
    return onSubmit && onSubmit(evt);
  };
  const {skin} = context;
  const dark = get('common.dark', skin);

  return (
    <form className={style.form} action={action} method={method} onSubmit={handleSubmit}>
      <Search {...search} onFocus={onSearchFocus} onBlur={onSearchBlur} />
      <div onClick={onReset} className={search.value ? style.wrapperClear : style.wrapperNoClear}>
        <ClearIcon color={dark} className={style.clear} />
      </div>
    </form>
  );
};

// class SearchForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isFocus: false
//     };
//
//     this.handleOnSearchFocus = this.handleOnSearchFocus.bind(this);
//     this.handleOnSearchBlur = this.handleOnSearchBlur.bind(this);
//   }
//
//   handleOnSearchFocus() {
//     this.setState(prevState => ({
//       isFocus: true
//     }));
//   }
//
//   handleOnSearchBlur() {
//     this.setState(prevState => ({
//       isFocus: false
//     }));
//   }
//
//   render() {
//     const {action, method, onChange, onSubmit, onReset, search} = this.props;
//     const handleSubmit = evt => {
//       evt.preventDefault();
//       return onSubmit && onSubmit(evt);
//     };
//     const {skin} = this.context;
//     const dark = get('common.dark', skin);
//
//     return (
//       <form className={style.form} action={action} method={method} onSubmit={handleSubmit}>
//         <Search {...search} onFocus={this.handleOnSearchFocus} onBlur={this.handleOnSearchBlur} />
//         <div onClick={onReset} className={(search.value.length > 0) && this.state.isFocus  ? style.wrapperClear : style.wrapperNoClear}>
//           <ClearIcon color={dark} className={style.clear} />
//         </div>
//       </form>
//     );
//   }
// }

SearchForm.propTypes = {
  action: PropTypes.string,
  method: PropTypes.string,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  onSearchFocus: PropTypes.func,
  onSearchBlur: PropTypes.func,
  search: PropTypes.shape(Search.propTypes)
};

export default SearchForm;
