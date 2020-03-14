import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import { RootState } from '../App';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = ({ route, navigation }) => {
  const { categoryId, categoryTitle } = route.params;
  const availableMeals = useSelector((state: RootState) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  navigation.setOptions({
    headerTitle: categoryTitle
  });

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe update filters</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoryMealScreen;
