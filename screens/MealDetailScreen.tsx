import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import { CustomHeaderButtons, Item } from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { RootState } from '../App';
import { toggleFavorite } from '../store/actions/meals';

const ListItem = props => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
}

const MealDetailScreen = ({ route, navigation }) => {
  const { mealId } = route.params;
  const availableMeals = useSelector((state: RootState) => state.meals.meals);
  const isFavorite = useSelector((state: RootState) => state.meals.favoriteMeals.some(meal => meal.id === mealId));
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  const dispatch = useDispatch();
  const toggleFavoriteHandler = () => dispatch(toggleFavorite(mealId));

  navigation.setOptions({
    headerTitle: selectedMeal.title,
    headerRight: () => (
      <CustomHeaderButtons>
        <Item 
          title="Favorite" 
          iconName={isFavorite ? "ios-star" : "ios-star-outline"}
          onPress={toggleFavoriteHandler}
        />
      </CustomHeaderButtons>
    )
  });

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingredients.map(ing => <ListItem key={ing}>{ing}</ListItem>)}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map(step => <ListItem key={step}>{step}</ListItem>)}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15, 
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1
  }
});

export default MealDetailScreen;
