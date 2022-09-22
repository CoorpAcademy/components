import {some, get, pipe, values} from 'lodash/fp';

const mapStateToErrorPopinProps = ({dispatch}) => {
  return state => {
    const isFailure = pipe(get('data'), values, some('isFailure'))(state);
    if (isFailure)
      return {
        content: 'An unexpected error has occurred',
        icon: 'AlertDiamond',
        mode: 'alert',
        descriptionText: 'Please reload the page and try again',
        firstButton: {
          largeButton: true,
          label: 'Reload',
          type: 'primary',
          'aria-label': 'Reload',
          handleOnclick: () => window.location.reload()
        }
      };
    return;
  };
};

export default mapStateToErrorPopinProps;
