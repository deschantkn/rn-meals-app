import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTile = ({ gridTileData, onSelect }) => {
  let Touchable: any = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchable = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <Touchable 
        onPress={onSelect}
        style={{ flex: 1 }}
      >
        <View style={{ ...styles.container, backgroundColor: gridTileData.item.color }}>
          <Text style={styles.title} numberOfLines={2}>{gridTileData.item.title}</Text>
        </View>
      </Touchable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: .26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'right'
  }
})

export default CategoryGridTile;
