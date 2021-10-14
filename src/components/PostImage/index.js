import React from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

const PostImage = ({image}) => {
  return (
    <View style={styles.postImageContainer}>
      <Image source={image} resizeMode="contain" style={styles.postImage} />
    </View>
  );
};

export default PostImage;

const styles = StyleSheet.create({
  postImageContainer: {marginVertical: 20, overflow: 'hidden'},
  postImage: {width: width, height: 200},
});
