import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/colors';

const Stack = createStackNavigator();

export default function MealsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
        }}
      >
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen} />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealScreen} />
        <Stack.Screen name="MealDetail" component={MealDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
