import React from 'react';
import { Platform, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/colors';
import FiltersScreen from '../screens/FiltersScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const MaterialTab = createMaterialBottomTabNavigator();
const Drawer = createDrawerNavigator();

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white'
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
};

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: Colors.accentColor,
          labelStyle: { fontFamily: 'open-sans-bold' }
        }}
      >
        <Drawer.Screen 
          name="MealsFav" 
          component={MealsFavNavigator} 
          options={{
            drawerLabel: 'Meals'
          }}
        />
        <Drawer.Screen name="Filters" component={FiltersNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

function FiltersNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen
        name="Filters"
        component={FiltersScreen} />
    </Stack.Navigator>
  );
}

function MealsNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen
        name="Categories"
        component={CategoriesScreen} />
      <Stack.Screen
        name="CategoryMeals"
        component={CategoryMealScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

function FavNavigator() {
  return (
    <Stack.Navigator 
      screenOptions={defaultStackNavOptions}
    >
      <Stack.Screen name="Favorites" component={FavoritesScreen} />
      <Stack.Screen name="MealDetail" component={MealDetailScreen} />
    </Stack.Navigator>
  );
}

function MealsFavNavigator() {
  let Navigator = (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold'
        }
      }}
    >
      <Tab.Screen 
        name="Meals"
        component={MealsNavigator} 
        options={{
          tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
        }} 
      />
      <Tab.Screen 
        name="Favorite" 
        component={FavNavigator} 
        options={{
          tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.color} />
        }}
      />
    </Tab.Navigator>
  );

  if (Platform.OS === 'android') {
    Navigator = (
      <MaterialTab.Navigator
        activeColor="white"
        shifting={true}
      >
        <MaterialTab.Screen 
          name="Meals"
          component={MealsNavigator} 
          options={{
            tabBarIcon: (tabInfo) => <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />,
            tabBarColor: Colors.primaryColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text> : 'Meals'
          }} 
        />
        <MaterialTab.Screen 
          name="Favorite"
          component={FavNavigator}
          options={{
            tabBarIcon: (tabInfo) => <Ionicons name="ios-star" size={25} color={tabInfo.color} />,
            tabBarColor: Colors.accentColor,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text> : 'Favorites'
          }}
        />
      </MaterialTab.Navigator>
    );
  }

  return Navigator;
};
