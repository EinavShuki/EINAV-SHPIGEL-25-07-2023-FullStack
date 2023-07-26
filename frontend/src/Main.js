import React, { useEffect, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import useFetch from './hooks/useFetch';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';

const initialState = {
  favoritesLocations: {},
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET':
      return { ...state, favoritesLocations: action.payload || {} };
    case 'ADD_FAV':
      console.log('changing the state');
      state.favoritesLocations[action.payload.value] = action.payload.label;
      return { ...state };
    case 'REMOVE_FAV':
      delete state.favoritesLocations[action.payload.key];
      return { ...state };
    default:
      return state;
  }
};

const Main = () => {
  const { data } = useFetch(`/api/favoritesLocations`); //haveto be done to set cookie in server
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    data && dispatch({ type: 'SET', payload: data.favoritesLocations });
  }, [data]);

  useEffect(() => {
    console.log({ state });
  }, [state]);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<HomeScreen />}
              exact
            />
          </Routes>
        </Router>
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default Main;
