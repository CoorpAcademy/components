import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JWPlayer from 'react-native-jw-media-player';
import Youtube from 'react-native-youtube';
import {Vimeo} from 'react-native-vimeo-iframe';
import {useTemplateContext} from '../../template/app-review/template-context';

import {Media} from '../questions/types';

export type Props = {media: Media};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

const VideoSwitch = ({media}: Props) => {
  const {brandTheme} = useTemplateContext();

  switch (media.mimeType) {
    case 'application/kontiki':
    case 'application/jwplayer':
    case 'video/mp4':
      if (!media.jwpOptions?.config) {
        return null;
      }

      return <JWPlayer style={styleSheet.container} config={media.jwpOptions.config} />;
    case 'application/vimeo':
      return media.videoId ? (
        <View style={styleSheet.container}>
          <Vimeo videoId={media.videoId} />
        </View>
      ) : null;
    case 'application/youtube':
      return (
        <Youtube
          apiKey={brandTheme.youtube?.apiKey || ''}
          style={styleSheet.container}
          videoId={media.videoId}
        />
      );
    default:
      return <Text>{`video mimeType ${media.mimeType} is not handled`}</Text>;
  }
};

const Video = ({media}: Props) => {
  return media ? <VideoSwitch media={media} /> : null;
};

export default Video;
