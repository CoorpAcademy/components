import video from '../../../video-player/test/fixtures/jwplayer';

export default {
  props: {
    title: 'Big Buck Bunny',
    description:
      "Big Buck Bunny tells the story of a giant rabbit with a heart bigger than himself. When one sunny day three rodents rudely harass him, something snaps... and the rabbit ain't no bunny anymore! In the typical cartoon tradition he prepares the nasty rodents a comical revenge.",
    video: {
      ...video.props
    },
    lastUpdated: 'Last update on 03/2023'
  }
};
