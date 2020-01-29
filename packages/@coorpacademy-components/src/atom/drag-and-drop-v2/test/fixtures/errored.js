import Default from './default';

export default {
  props: {
    ...Default.props,
    errors: [
      'Fichier trop volumineux',
      'Fichier non reconnu',
      'Fichier contenant un corona virus',
      "Fichier qui n'est pas un fichier"
    ]
  }
};
