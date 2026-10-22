// The audience section of the one-page assignment form: everyone, populations, a file of learner
// logins and individual learners. Every string comes from the app. The file is keyed on login.
export default {
  props: {
    title: 'Audience',
    subtitle: 'Who must complete these modules.',
    disabledExplanation:
      'Every learner of the platform is assigned. Turn this off to pick an audience.',
    everyone: {
      value: false,
      label: 'Assign to every learner of the platform',
      title: 'Everyone',
      onChange: value => console.log('everyone', value)
    },
    populations: {
      title: 'Populations',
      subtitle: 'Learners of these populations, including those who join later.',
      label: 'Populations',
      options: [
        {name: 'Managers FR', value: 'managers-fr', selected: true, count: '412'},
        {name: 'Managers DE', value: 'managers-de', selected: true, count: '236'},
        {name: 'Sales EMEA', value: 'sales-emea', selected: false, count: '1,204'}
      ],
      removeLabel: 'Remove',
      onChange: options => console.log('populations', options)
    },
    upload: {
      title: 'Upload a list of learners',
      subtitle: 'Unknown, ambiguous and inactive logins are reported before you save.',
      templateLink: {label: 'Download template', href: '/assignment-learners-template.xlsx'},
      templatePreview: {header: 'login', rows: ['j.okafor', 'm.weber']},
      dropzone: {
        description: 'xlsx, xls or csv, one login column, up to 5,000 rows',
        browse: 'Choose a file',
        dropLabel: 'Drop the file here',
        loadingLabel: 'Checking the logins…'
      },
      status: 'done',
      onUpload: file => console.log('upload', file),
      file: {name: 'managers-q4.xlsx', detail: '6 rows · checked against logins just now'},
      removeLabel: 'Remove',
      onRemove: () => console.log('remove'),
      summary: {
        valid: '3 valid',
        unknown: '1 unknown',
        ambiguous: '1 ambiguous',
        inactive: '1 inactive'
      },
      keptLabel: 'Only the 3 valid learners are kept.',
      report: {
        label: 'Download the 3 logins not kept, with their reason (xlsx)',
        onDownload: () => console.log('download report')
      }
    },
    individuals: {
      title: 'Individual learners',
      placeholder: 'Search learners by name or login',
      value: '',
      suggestions: [],
      removeLabel: 'Remove',
      selected: [
        {id: 'u1', label: 'Camille Durand', login: 'camille.durand'},
        {id: 'u2', label: 'Pedro Costa', login: 'p.costa'}
      ],
      onSearch: query => console.log('search', query),
      onAdd: learner => console.log('add', learner),
      onRemove: id => console.log('remove', id)
    },
    total: {
      label: 'Estimated audience: 649 learners',
      detail: '412 Managers FR · 236 Managers DE · 3 from file · 2 picked · 4 counted once'
    }
  }
};
