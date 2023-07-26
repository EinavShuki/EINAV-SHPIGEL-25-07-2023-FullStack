import React, { createContext, useReducer } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import useFetch from './hooks/useFetch';
import _ from 'lodash';

const initialState = {
  favoritesLocations: {},
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload;
    case 'ADD_FAV':
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };
    case 'REMOVE_FAV':
      delete state[action.payload.key];
      return state;
    default:
      return state;
  }
};

const Main = () => {
  const StateContext = createContext();
  const DispatchContext = createContext();

  const { data: fafArray } = useFetch(`/api/favoritesLocations`);
  const [state, dispatch] = useReducer(reducer, initialState);

  useFetch(() => {
    fafArray && dispatch({ type: 'SET', payload: fafArray });
  }, [fafArray]);

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
