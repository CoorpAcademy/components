import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import JWPlayer from '@jwplayer/jwplayer-react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import {Vimeo} from 'react-native-vimeo-iframe';
import {useTemplateContext} from '../../template/app-review/template-context';

import {Media} from '../questions/types';

export type Props = {media: Media; autoplay: boolean};

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  }
});

const VideoSwitch = ({media, autoplay}: Props) => {
  const {brandTheme} = useTemplateContext();

  switch (media.mimeType) {
    case 'application/kontiki':
    case 'application/jwplayer':
    case 'video/mp4': {
      if (!media.jwpOptions?.config) {
        return null;
      }

      const config = {
        ...media.jwpOptions.config,
        autostart: autoplay
      };

      return <JWPlayer style={styleSheet.container} config={config} />;
    }
    case 'application/vimeo':
      return media.videoId ? (
        <View style={styleSheet.container}>
          <Vimeo videoId={media.videoId} />
        </View>
      ) : null;
    case 'application/youtube':
      return media.videoId ? (
        <View style={styleSheet.container}>
          <YoutubePlayer height={300} play={autoplay} videoId={media.videoId} />
        </View>
      ) : null;
    default:
      return <Text>{`video mimeType ${media.mimeType} is not handled`}</Text>;
  }
};

const Video = ({media, autoplay}: Props) => {
  return media ? <VideoSwitch media={media} autoplay={autoplay} /> : null;
};

export default Video;
