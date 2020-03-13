import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, Text, View, Switch, Platform } from 'react-native';
import { CommonActions } from '@react-navigation/native';

import { CustomHeaderButtons, Item } from '../components/HeaderButton';
import Colors from '../constants/colors';

const FilterSwitch = ({ label, state, onChange }) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{label}</Text>
      <Switch
        trackColor={{ true: Colors.primaryColor }}
        thumbColor={Platform.OS === 'android' ? Colors.primaryColor : null}
        value={state}
        onValueChange={onChange}
      />
    </View>
  );
};

const FiltersScreen = ({ navigation, route }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegetarian, isVegan]);

  useEffect(() => {
    navigation.dispatch(CommonActions.setParams({ save: saveFilters }));
  }, [saveFilters]);

  navigation.setOptions({
    headerTitle: 'Filter Meals',
    headerLeft: () => (
      <CustomHeaderButtons>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </CustomHeaderButtons>
    ),
    headerRight: () => (
      <CustomHeaderButtons>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={() => route.params.save()}
        />
      </CustomHeaderButtons>
    )
  });

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filter / Restrictions</Text>
      <FilterSwitch
        label="Gluten free"
        state={isGlutenFree} 
        onChange={(newVal) => setIsGlutenFree(newVal)}
      />
      <FilterSwitch
        label="Lactose free"
        state={isLactoseFree} 
        onChange={(newVal) => setIsLactoseFree(newVal)}
      />
      <FilterSwitch
        label="Vegan"
        state={isVegan} 
        onChange={(newVal) => setIsVegan(newVal)}
      />
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian} 
        onChange={(newVal) => setIsVegetarian(newVal)}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginVertical: 15
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    margin: 20,
    textAlign: 'center'
  }
});

export default FiltersScreen;
