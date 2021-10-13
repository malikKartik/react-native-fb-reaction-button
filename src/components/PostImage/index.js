import React from 'react'
import { StyleSheet, View, Image, Dimensions } from 'react-native'
import rnImage from '../../../assets/master-react-native.jpg';
const {width} = Dimensions.get('window');

const PostImage = () => {
    return (
        <View style={styles.postImageContainer}>
          <Image source={rnImage} resizeMode='contain' style={styles.postImage}/>
        </View>
    )
}

export default PostImage

const styles = StyleSheet.create({
    postImageContainer: {marginVertical: 20},
    postImage: {width: width, height: 200 },
})
