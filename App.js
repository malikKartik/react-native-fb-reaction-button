import React, {useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';
import Post from './src/components/Post';
import {POSTS} from './src/constants/misc';

const App = () => {
  const [isReactionBarOpen, setIsReactBarOpen] = useState(false);

  const handleGlobalTap = () => {
    setIsReactBarOpen(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <TapGestureHandler onActivated={handleGlobalTap}>
        <ScrollView style={styles.screen}>
          {POSTS.map(post => {
            return (
              <Post
                postData={post}
                isReactionBarOpen={isReactionBarOpen}
                setIsReactBarOpen={setIsReactBarOpen}
              />
            );
          })}
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
