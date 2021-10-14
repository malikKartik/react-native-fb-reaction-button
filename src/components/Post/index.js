import React, {useRef} from 'react';
import {StyleSheet, View} from 'react-native';
import ActionBar from '../ActionBar';
import PostHeader from '../PostHeader';
import PostImage from '../PostImage';

const Post = ({isReactionBarOpen, setIsReactBarOpen, postData}) => {
  const reactionBarRef = useRef();
  return (
    <View style={styles.postContainer}>
      <PostHeader
        name={postData.name}
        title={postData.title}
        profileImage={postData.profileImage}
      />
      <PostImage image={postData.image} />
      <ActionBar
        isReactionBarOpen={isReactionBarOpen}
        setIsReactBarOpen={setIsReactBarOpen}
        reactionBarRef={reactionBarRef}
      />
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  postContainer: {
    width: '100%',
    padding: 5,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
});
