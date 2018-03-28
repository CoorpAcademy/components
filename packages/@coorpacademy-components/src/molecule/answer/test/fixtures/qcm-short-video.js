import Qcm from '../../../questions/qcm/test/fixtures/short-answers';

const answerProps = Qcm.props;

export default {
  props: {
    model: {
      type: 'qcm',
      ...answerProps
    },
    media: {
      type: 'video',
      mimeType: 'application/vimeo',
      videoId: '166479793',
      description: 'De l’éco-conception à l’innovation responsable',
      poster:
        '//static.coorpacademy.com/content/CoorpAcademy/content-partnerships-svp/cockpit-partner-svp/poster/poster-1480426784168.jpg',
      _id: '590b9be24f7b862e0046e577',
      subtitles: [],
      posters: [],
      src: [],
      onClick: () => {},
      onPlay: () => console.log('play'),
      onPause: () => console.log('pause'),
      onResume: () => console.log('resume'),
      onEnded: () => console.log('end')
    }
  }
};
