import get from 'lodash/fp/get';
import omit from 'lodash/fp/omit';
import pipe from 'lodash/fp/pipe';
import set from 'lodash/fp/set';

const appendJWPOptions = prefix => media => {
  const mimeType = get('mimeType', media) || get(`${prefix}mimeType`, media);

  if (mimeType === 'video/mp4') {
    const playerId = get('_id', media) || get(`${prefix}_id`, media);
    const file = get('mediaUrl', media) || get(`${prefix}mediaUrl`, media);
    const options = {
      playerId,
      file,
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
    };
    return pipe(
      set(`${prefix}jwpOptions`, options),
      set(`${prefix}mimeType`, mimeType),
      omit(`${prefix}id`)
    )(media);
  }
  return omit(`${prefix}id`, media);
};

export default appendJWPOptions;
