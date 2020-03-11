import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { MEALS } from '../data/dummy-data';
import { CustomHeaderButtons, Item } from '../components/HeaderButton';

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <CustomHeaderButtons>
        <Item 
          title="Favorite" 
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!')
          }}
        />
      </CustomHeaderButtons>
    )
  });

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
