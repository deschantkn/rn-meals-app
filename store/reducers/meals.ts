import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';
import { TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

export type MealsState = {
  readonly meals: Meal[];
  readonly filteredMeals: Meal[];
  readonly favoriteMeals: Meal[]
};

const initialState: MealsState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      if (existingIndex >= 0 ) {
        const updatedFavMeals = [...state.favoriteMeals]
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const meal = state.favoriteMeals.concat(state.meals.find((meal => meal.id === action.mealId)));
        return { ...state, favoriteMeals: meal };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      const updatedFilteredMeals = state.meals.filter(meal => {
        if (appliedFilters.glutenFree && !meal.isGlutenFree) return false;
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) return false;
        if (appliedFilters.vegetarian && !meal.isVegetarian) return false;
        if (appliedFilters.vegan && !meal.isVegetarian) return false;
        return true;
      });
      return { ...state, filteredMeals: updatedFilteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;