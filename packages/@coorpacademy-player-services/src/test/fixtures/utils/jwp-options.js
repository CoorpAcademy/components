import {get, omit, pipe, set} from 'lodash/fp';

const appendJWPOptions = prefix => media => {
  const mimeType = get('mimeType', media) || get(`${prefix}mimeType`, media);

  if (mimeType === 'video/mp4') {
    const playerId = get('_id', media) || get(`${prefix}_id`, media);
    const file = get('mediaUrl', media) || get(`${prefix}mediaUrl`, media);
    const options = {
      playerId,
      file,
      playerScript:
        'https://s3-eu-west-1.amazonaws.com/static.coorpacademy.com/JwPlayer/8.6.3/jwplayer.js',
      licenseKey: 'QDh3Fb2afiIAFI+XwlncwQDhNEwkXetm1y8tzWn3km8=',
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
