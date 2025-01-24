export default {
  props: {
    isOpen: true,
    onCancel: () => {},
    onConfirm: () => {},
    onClose: () => {},
    source: {
      inputText: {
        type: 'text',
        title: 'Title',
        hint: '7/80 characters',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        value: 'Agility',
        disabled: false,
        valid: false,
        error: '',
        required: true,
        onChange: value => console.log(value)
      },
      textArea: {
        type: 'textarea',
        title: 'Description',
        hint: '181/400 characters',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        value:
          'Agility is the ability to quickly adapt to change, think on your feet, and respond efficiently in dynamic situations, enhancing performance in both individual and team environments.',
        disabled: false,
        valid: false,
        error: '',
        required: true,
        onChange: value => console.log(value)
      },
      inputLanguage: '🇬🇧 English (default language)'
    },
    target: {
      inputText: {
        type: 'text',
        title: 'Title',
        hint: '8/80 characters',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        value: 'Agilité',
        disabled: false,
        valid: false,
        error: '',
        required: true,
        onChange: value => console.log(value)
      },
      textArea: {
        type: 'textarea',
        name: 'Description target',
        title: 'Description',
        hint: '215/400 characters',
        placeholder: 'This is an input',
        theme: 'coorpmanager',
        description: 'This is the tooltip text',
        value: `L'agilité est la capacité de s'adapter rapidement aux changements, de penser sur le vif et de répondre efficacement dans des situations dynamiques, améliorant ainsi la performance tant dans des environnements individuels qu'en équipe.`,
        disabled: false,
        valid: false,
        error: '',
        required: true,
        onChange: value => console.log(value)
      },
      language: '🇫🇷 French'
    }
  }
};
