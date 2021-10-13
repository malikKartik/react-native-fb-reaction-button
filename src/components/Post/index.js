import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ActionBar from '../ActionBar'
import PostHeader from '../PostHeader'
import PostImage from '../PostImage'

const Post = ({isReactionBarOpen, setIsReactBarOpen}) => {
    return (
        <View style={styles.postContainer}>
            <PostHeader />
            <PostImage />
            <ActionBar isReactionBarOpen={isReactionBarOpen} setIsReactBarOpen={setIsReactBarOpen}/>
        </View>
    )
}

export default Post

const styles = StyleSheet.create({
    postContainer: {
        width: '100%',
        padding: 5,
        backgroundColor: '#fff',
        marginVertical: 5,
    },
})
