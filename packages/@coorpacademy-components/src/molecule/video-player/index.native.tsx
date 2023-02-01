import React from 'react';
import {Text} from 'react-native';
import JWPlayer from 'react-native-jw-media-player';
import {Media} from '../questions/types';

const Video = ({media}: {media: Media}) => {
  switch (media.mimeType) {
    case 'application/jwplayer':
      return (
        <JWPlayer
          // ref={onRef}
          // style={styles.video}
          config={media.jwpOptions?.config}
          controls
        />
      );
    default:
      return <Text>{`video mimeType ${mimeType} is not handled`}</Text>;
  }
};

export default Video;
