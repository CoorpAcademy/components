import Kontiki from '../../../../molecule/video-player/test/fixtures/kontiki';

export default {
  props: {
    resources: [
      {
        ...Kontiki.props,
        type: 'video',
        poster:
          'https://api.coorpacademy.com/api-service/medias?url=https://static.coorpacademy.com/content/schneider-electric/en/medias/img/poster/vlcsnap-2015-08-18-19h41m19s916-1439919822187.png&h=250&w=250&q=90',
        description: 'R&ED Program',
        mimeType: 'application/kontiki',
        _id: '590b862e2e967f64333ad45f',
        subtitles: [],
        posters: [],
        src: [],
        url:
          '//schneider-electric.mc.eu1.kontiki.com/global/player?moid=3be700ca-9a15-4c43-bb90-45eae470c55d&repeat=false&client=false&context=embed&overlay=false&name=false&description=false&created_by=false',
        videoId: '3be700ca-9a15-4c43-bb90-45eae470c55d',
        onClick: () => {},
        selected: true
      },
      {
        type: 'video',
        poster: '//static.coorpacademy.com/content/digital/miniatures_cours/avance/1A1.png',
        description: 'Le concept de Knowledge Graph',
        mimeType: 'application/vimeo',
        videoId: '89404998\n',
        _id: '590b862e2e967f64333ad45e',
        subtitles: [],
        posters: [],
        src: [],
        selected: false,
        onClick: () => {}
      }
    ]
  }
};
