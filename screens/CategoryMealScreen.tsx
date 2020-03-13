import React from 'react';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import MealList from '../components/MealList';

const CategoryMealScreen = ({ route, navigation }) => {
  const { categoryId, categoryTitle } = route.params;
  const displayedMeals = MEALS.filter(meal => meal.categoryIds.indexOf(categoryId) >= 0);

  navigation.setOptions({
    headerTitle: categoryTitle
  });

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

export default CategoryMealScreen;
