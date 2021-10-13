import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { PanGestureHandler, TapGestureHandler } from 'react-native-gesture-handler'
import likeImage from '../../../assets/like.png';
import heartImage from '../../../assets/heart.png';
import laughingImage from '../../../assets/laughing.png';
import angryImage from '../../../assets/angry.png';
import sadImage from '../../../assets/sad.png';


const REACTION_BAR_HEIGHT = 50

const ReactionsBar = ({panRef}) => {
    return (
        <TapGestureHandler>
            <View style={styles.reactionButtonsWrapper}>
                <PanGestureHandler ref={panRef} onBegan={()=>{console.log("Started")}}><Image source={likeImage} resizeMode='contain' style={styles.reactionIcon}/></PanGestureHandler>
                <Image source={heartImage} resizeMode='contain' style={styles.reactionIcon}/>
                <Image source={laughingImage} resizeMode='contain' style={styles.reactionIcon}/>
                <Image source={sadImage} resizeMode='contain' style={styles.reactionIcon}/>
                <Image source={angryImage} resizeMode='contain' style={styles.reactionIcon}/>
            </View>
        </TapGestureHandler>
    )
}

export default ReactionsBar

const styles = StyleSheet.create({
    reactionButtonsWrapper: {
        position: 'absolute',
        top: -REACTION_BAR_HEIGHT,
        height: REACTION_BAR_HEIGHT,
        borderRadius: REACTION_BAR_HEIGHT/2,
        width: 300,
        backgroundColor: '#fff',
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    reactionIcon: {
        height: 30,
        width: 30,
    }
})
