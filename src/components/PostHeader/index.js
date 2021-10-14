import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const PostHeader = ({name, title, profileImage}) => {
  return (
    <View style={[styles.row, styles.spaceBetween, styles.header]}>
      <View style={styles.row}>
        <View style={styles.userIcon}>
          <Image
            source={profileImage}
            resizeMode="contain"
            style={styles.userIcon}
          />
        </View>
        <View style={styles.headerText}>
          <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>
            {name}
          </Text>
          <Text>{title}</Text>
        </View>
      </View>
      <View>
        <EntypoIcons name="dots-three-vertical" size={20} color="#000" />
      </View>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
  },
  userIcon: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: 'black',
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  headerText: {
    marginLeft: 20,
  },
});
