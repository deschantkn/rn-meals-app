import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import MealItem from './MealItem';

const MealList = ({ listData, navigation }) => {
  const renderMealItem = (itemData) => {
    return (
      <MealItem 
        mealData={itemData.item} 
        onSelectMeal={() => navigation.navigate('MealDetail', { mealId: itemData.item.id })} />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData} 
        renderItem={renderMealItem} 
        style={{ width: '100%' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default MealList;
