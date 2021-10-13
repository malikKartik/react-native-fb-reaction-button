import React, { useRef } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import EntypoIcons from 'react-native-vector-icons/Entypo';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import FontistoIcons from 'react-native-vector-icons/Fontisto';
import { LongPressGestureHandler, TapGestureHandler } from 'react-native-gesture-handler';
import { useHandleActionInteraction } from './hooks';
import ReactionsBar from './ReactionsBar';

export const actionTitles = {
  LIKE: "Like",
  COMMENT: 'Comment',
  SHARE: "Share",
}

const ACTIONS = [
    {
      iconFamily: AntDesignIcons,
      iconName: 'like2',
      title: actionTitles.LIKE,
    },
    {
      iconFamily: FontistoIcons,
      iconName: 'comment',
      title: actionTitles.COMMENT,
    },
    {
      iconFamily: EntypoIcons,
      iconName: 'share',
      title: actionTitles.SHARE,
    },
]

const ActionBar = ({isReactionBarOpen, setIsReactBarOpen}) => {
    const panRef = useRef();
    const { handleActionTap, showReactionButton} = useHandleActionInteraction({isReactionBarOpen, setIsReactBarOpen});
    return (
        <View style={[styles.row,styles.postActions]}>
          {showReactionButton && <ReactionsBar panRef={panRef}/>}
          {ACTIONS.map(action=>{
            return(
              <LongPressGestureHandler 
                simultaneousHandlers={panRef}
                onActivated={()=>handleActionTap(action.title)}
                key={action.title}
                minDurationMs={800}
              >
                <View sytyle={styles.alignCenter}>
                  <View style={styles.actionIconContainer}>
                    <action.iconFamily name={action.iconName} size={20} color="#444"/>
                  </View>
                  <Text>{action.title}</Text>
                </View>
              </LongPressGestureHandler>
            )
          })}
        </View>
    )
}

export default ActionBar

const styles = StyleSheet.create({
    postActions: {
        width: '100%',
        borderColor:  '#666',
        borderTopWidth: StyleSheet.hairlineWidth,
        justifyContent: 'space-around',
        paddingTop: 10,
    },
    actionIconContainer: {justifyContent: 'center', flexDirection: 'row'},
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    alignCenter: {
        alignItems: 'center',
    },
})
