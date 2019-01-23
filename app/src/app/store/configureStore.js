import { createStore, combineReducers } from 'redux';
import employeesReducer from 'reducers/employees';
import tabsReducer from 'reducers/tabs';
import filtersReducer from 'reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      employees: employeesReducer,
      filters: filtersReducer,
      tabs: tabsReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
