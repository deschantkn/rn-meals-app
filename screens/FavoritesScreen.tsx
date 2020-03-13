import React from 'react';

import MealList from '../components/MealList';
import { CustomHeaderButtons, Item } from '../components/HeaderButton';

import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
  navigation.setOptions({
    headerTitle: 'Your Favorites',
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
  const favMeals = MEALS.filter((meal) => meal.id === 'm1' || meal.id === 'm2');

  return <MealList listData={favMeals} navigation={navigation} />
};

export default FavoritesScreen;
