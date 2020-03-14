import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet } from 'react-native';

import MealList from '../components/MealList';
import { CustomHeaderButtons, Item } from '../components/HeaderButton';
import { RootState } from '../App';
import DefaultText from '../components/DefaultText';

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

  const favMeals = useSelector((state: RootState) => state.meals.favoriteMeals);

  if (!favMeals || favMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No favorites. Start adding some!</DefaultText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={navigation} />
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default FavoritesScreen;
