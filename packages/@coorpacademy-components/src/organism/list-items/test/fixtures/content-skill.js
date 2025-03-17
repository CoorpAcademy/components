import checkbox from '../../../list-item/test/fixtures/checkbox';
import checkboxSelected from '../../../list-item/test/fixtures/checkbox-selected';
import searchProps from '../../../../atom/input-search/test/fixtures/coorpmanager';
import checkboxWithTitleProps from '../../../../atom/checkbox-with-title/test/fixtures/with-custom-icon';

const items = [
  {...checkboxSelected.props, id: '1'},
  {...checkboxSelected.props, id: '2'},
  {...checkbox.props, id: '3'}
];

export default {
  props: {
    checkboxWithTitle: {
      ...checkboxWithTitleProps.props,
      title: `<span style="color: #1D1D2B;">${
        items.length - 1
      }</span><span>&nbsp;</span>items selected`,
      customStyle: {...checkboxWithTitleProps.props.customStyle, paddingLeft: '16px'}
    },
    'aria-label': 'aria list',
    content: {items, type: 'list'},
    search: {...searchProps.props, placeholder: 'Search...'}
  }
};
