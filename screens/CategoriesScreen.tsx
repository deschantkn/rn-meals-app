import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Meal Categories',
  });

  const renderGridItem = (itemData) => {
    return (
      <CategoryGridTile 
        gridTileData={itemData}
        onSelect={() => navigation.navigate('CategoryMeals', {
          categoryId: itemData.item.id,
          categoryTitle: itemData.item.title,
          categoryColor: itemData.item.color
        })}
      />
    );
  };

  return (
    <FlatList 
      data={CATEGORIES} 
      renderItem={renderGridItem} 
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;
