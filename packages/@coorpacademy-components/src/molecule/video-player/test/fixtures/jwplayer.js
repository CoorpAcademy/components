import Default from './vimeo';

export default {
  props: {
    ...Default.props,
    mimeType: 'video/mp4',
    jwpOptions: {
      playerId: '5980934b7dfebe01618a57df',
      file: 'https://simoocdigital.credit-agricole.fr/media/content/bigdata/159363386.mp4',
      playerScript: 'https://up-staging.coorpacademy.com/libs/jwplayer/7.10.7/jwplayer.js',
      licenseKey: 'yI8rSuuJ+fs7VdJzWjY4zGZU48UcOn+Gjg+FXZag16o=',
      customProps: {
        aspectratio: '16:9',
        autostart: false,
        width: '100%',
        skin: {
          name: 'bekle'
        }
      }
    }
  }
};
