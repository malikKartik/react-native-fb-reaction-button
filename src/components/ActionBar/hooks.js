import React, {useEffect, useState} from 'react';
import {actionTitles} from '.';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {Image, StyleSheet} from 'react-native';
import {REACTION_IMAGES} from '../../constants/enums';

export const useHandleActionInteraction = ({
  isReactionBarOpen,
  setIsReactBarOpen,
}) => {
  const [showReactionButtons, setShowReactionButtons] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    if (!isReactionBarOpen) {
      setShowReactionButtons(false);
    }
  }, [isReactionBarOpen]);

  const handleActionTap = actionTitle => {
    if (actionTitle === actionTitles.LIKE) {
      if (!showReactionButtons) {
        setIsReactBarOpen(true);
      }
      setShowReactionButtons(!showReactionButtons);
    }
  };

  const getLikeIcon = () => {
    if (!selectedIcon) {
      return <AntDesignIcons name={'like2'} size={20} color="#444" />;
    } else {
      return (
        <Image
          source={REACTION_IMAGES[selectedIcon]}
          resizeMode="contain"
          style={[styles.reactionIcon, {transform: [{scale: 1}]}]}
        />
      );
    }
  };

  const handleLikeButtonPress = () => {
    setShowReactionButtons(false);
    if (!selectedIcon) {
      setSelectedIcon('LIKE');
    } else {
      setSelectedIcon(null);
    }
  };

  const handleSetSelectedIcon = icon => {
    setSelectedIcon(icon);
    setShowReactionButtons(false);
  };

  return {
    handleActionTap,
    showReactionButtons,
    selectedIcon,
    setSelectedIcon: handleSetSelectedIcon,
    getLikeIcon,
    handleLikeButtonPress,
  };
};

const styles = StyleSheet.create({
  reactionIcon: {
    height: 20,
    width: 20,
  },
});
