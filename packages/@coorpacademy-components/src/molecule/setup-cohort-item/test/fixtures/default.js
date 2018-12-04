import providerConditionProps from './default-provider';
import groupSelectionProps from './default-groups';

const providerCondition = providerConditionProps.props.fields[1].providerCondition;
const groupSelection = groupSelectionProps.props.fields[1].groupSelection;

export default {
  props: {
    fields: [
      {
        type: 'text',
        title: 'Name',
        value: 'value',
        required: true,
        autoFocus: true
      },
      {
        type: 'splitScreen',
        providerCondition,
        groupSelection
      },
      {
        type: 'buttonGroup',
        buttonGroup: [
          {
            type: 'button',
            typeAction: 'submit',
            submitValue: 'SUBMIT'
          },
          {
            type: 'button',
            submitValue: 'DELELE',
            style: {
              backgroundColor: '#F73F52'
            }
          }
        ]
      }
    ]
  }
};
