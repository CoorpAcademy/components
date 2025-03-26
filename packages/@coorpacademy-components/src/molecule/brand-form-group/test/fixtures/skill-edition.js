import Select from '../../../../organism/title-and-input/test/fixtures/select-and-title';
import InputText from '../../../../organism/title-and-input/test/fixtures/input-text-and-title';
import InputTextArea from '../../../../organism/title-and-input/test/fixtures/input-textarea-and-title';

export default {
  props: {
    title: 'Skill informations',
    subtitle: 'Provide key details about the skill, including its name, description and its icon',
    titleSize: 'xl-strong',
    subtitleSize: 'medium',
    fields: [
      {
        ...Select.props,
        type: 'titleAndInput'
      },
      {...InputText.props, type: 'titleAndInput'},
      {
        ...InputTextArea.props,
        type: 'titleAndInput'
      }
    ]
  }
};
