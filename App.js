import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { TapGestureHandler } from 'react-native-gesture-handler';
import Post from './src/components/Post';

const App = () => {
  const [isReactionBarOpen, setIsReactBarOpen] = useState(false);
  return (
    <SafeAreaView style={styles.screen}>
      <TapGestureHandler onActivated={()=>{
        setIsReactBarOpen(false)
      }}>
      <ScrollView style={styles.screen}>
        <Post isReactionBarOpen={isReactionBarOpen} setIsReactBarOpen={setIsReactBarOpen}/>
        <Post isReactionBarOpen={isReactionBarOpen} setIsReactBarOpen={setIsReactBarOpen}/>
        <Post isReactionBarOpen={isReactionBarOpen} setIsReactBarOpen={setIsReactBarOpen}/>
      </ScrollView>
      </TapGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#eee',
    flex: 1,
  },
});

export default App;
