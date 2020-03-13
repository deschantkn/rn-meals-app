import React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { CustomHeaderButtons, Item } from '../components/HeaderButton';
import CategoryGridTile from '../components/CategoryGridTile';
import { CATEGORIES } from '../data/dummy-data';


const CategoriesScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Meal Categories',
    headerLeft: () => (
      <CustomHeaderButtons>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </CustomHeaderButtons>
    )
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
