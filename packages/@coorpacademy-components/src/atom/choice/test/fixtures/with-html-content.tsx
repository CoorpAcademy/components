import noop from 'lodash/fp/noop';
import {Props} from '../../index.native';

type Fixture = {props: Props};

const htmlContent = `
 <i> italic input </i> and <s> stripped input </s>
`;

const fixture: Fixture = {
  props: {
    questionType: 'qcm',
    onPress: noop,
    children: htmlContent
  }
};

export default fixture;
