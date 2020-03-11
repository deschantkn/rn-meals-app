import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealScreen = ({ route, navigation }) => {
  const { categoryId, categoryTitle } = route.params;
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  const renderMealItem = (itemData) => {
    return <MealItem mealData={itemData.item} onSelectMeal={() => navigation.navigate('MealDetail', { mealId: itemData.item.id })} />;
  };

  navigation.setOptions({
    headerTitle: categoryTitle
  });

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals} 
        renderItem={renderMealItem} 
        style={{ width: '100%' }} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15
  }
});

export default CategoryMealScreen;
