import React from 'react';
import { Alert, View } from 'react-native';
import { VESDK } from 'react-native-videoeditorsdk';


const VideoEditor = () => {
  VESDK.openEditor(require('./skater.mp4')).then(
    (result) => {
      Alert.alert('ok');
      console.log(JSON.stringify(result));
    },
    (error) => {
      Alert.alert('ko');
      console.log(JSON.stringify(error));
    },
  );
  return <View style={{flex: 1}}/>;
};

export default VideoEditor;
