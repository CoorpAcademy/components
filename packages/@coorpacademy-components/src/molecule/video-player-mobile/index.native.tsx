import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JWPlayer from 'react-native-jw-media-player';
import Youtube from 'react-native-youtube';
import {useTemplateContext} from '../../template/app-review/template-context';

import {Media} from '../questions/types';

export type Props = {media: Media};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
  video: {
    flex: 1,
    width: '100%'
  }
});

const VideoSwitch = ({media}: Props) => {
  const {brandTheme} = useTemplateContext();

  switch (media.mimeType) {
    case 'application/jwplayer':
      if (!media.jwpOptions?.config) {
        return null;
      }

      return <JWPlayer style={styleSheet.video} config={media.jwpOptions.config} />;
    case 'application/youtube':
      return (
        <Youtube
          apiKey={brandTheme.youtube?.apiKey || ''}
          style={styleSheet.video}
          videoId={media.videoId}
        />
      );
    default:
      return <Text>{`video mimeType ${media.mimeType} is not handled`}</Text>;
  }
};

const Video = ({media}: Props) => {
  return <View style={styleSheet.container}>{media ? <VideoSwitch media={media} /> : null}</View>;
};

export default Video;
