import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const PostHeader = () => {
    return (
        <View style={[styles.row, styles.spaceBetween, styles.header]}>
          <View style={styles.row}>
            <View style={styles.userIcon}></View>
            <View style={styles.headerText}>
              <Text style={{color: 'black', fontWeight: '600', fontSize: 16}}>Kartik Malik</Text>
              <Text>Javascript developer</Text>
            </View>
          </View>
          <View>
            <EntypoIcons name="dots-three-vertical" size={20} color="#000"/>
          </View>
        </View>
    )
}

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
})
