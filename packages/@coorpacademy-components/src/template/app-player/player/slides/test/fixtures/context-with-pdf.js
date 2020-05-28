import Context from './context';

export default {
  props: {
    ...Context.props,
    slideContext: {
      ...Context.props.slideContext,
      media: {
        type: 'pdf',
        description: 'PDF description',
        mimeType: 'application/pdf',
        poster:
          '//static.coorpacademy.com/content/CoorpAcademy/content-tourism/cockpit-tourism/default/shutterstock_256004251-1590486407695.jpg',
        mediaUrl:
          'https://static.coorpacademy.com/content/CoorpAcademy/content/cockpit-mooc-technique/raw/hierachie-contenu-1494494029567.pdf'
      }
    }
  }
};
