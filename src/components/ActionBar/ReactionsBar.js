import React, {useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  PanGestureHandler,
  State,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {getActiveReaction} from '../../utils/getActiveReaction';
import {REACTION_IMAGES} from '../../constants/enums';

const REACTION_BAR_HEIGHT = 50;

const ReactionsBar = ({setSelectedIcon}) => {
  const [activeReaction, setActiveReaction] = useState(null);

  const handleGesture = event => {
    setActiveReaction(getActiveReaction(event.nativeEvent.x));
  };

  const handleStateChange = event => {
    if (event.nativeEvent.state === State.END) {
      setSelectedIcon(activeReaction);
    }
  };

  return (
    <PanGestureHandler
      onGestureEvent={handleGesture}
      onHandlerStateChange={handleStateChange}>
      <View style={styles.reactionButtonsWrapper}>
        {Object.keys(REACTION_IMAGES).map(imageKey => {
          return (
            <TouchableOpacity
              onPress={() => setSelectedIcon(imageKey)}
              style={styles.iconWrapper}>
              <Image
                key={imageKey}
                source={REACTION_IMAGES[imageKey]}
                resizeMode="contain"
                style={[
                  styles.reactionIcon,
                  {transform: [{scale: activeReaction === imageKey ? 1.4 : 1}]},
                ]}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </PanGestureHandler>
  );
};

export default ReactionsBar;

const styles = StyleSheet.create({
  reactionButtonsWrapper: {
    position: 'absolute',
    top: -REACTION_BAR_HEIGHT,
    height: REACTION_BAR_HEIGHT,
    borderRadius: REACTION_BAR_HEIGHT / 2,
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
  },
  iconWrapper: {
    height: 30 * 1.4,
    width: 30 * 1.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
