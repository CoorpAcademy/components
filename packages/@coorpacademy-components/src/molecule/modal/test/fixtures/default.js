export default {
  props: {
    header: 'Create new course',
    description:
      '<p>Select the type of course you want to create.</p><p>You can either <b>create</b> or <b>import</b> an existing course.</p>',
    choices: {
      left: {
        title: 'Create course',
        subtitle: 'with Coorpacademy',
        link: 'https://www.coordacademy.com'
      },
      right: {
        title: 'Import course',
        subtitle: 'Scorm, Youtube, Link',
        link: 'https://www.google.com'
      }
    },
    onClose: () => console.log('Gotchaaaa 😂')
  }
};
