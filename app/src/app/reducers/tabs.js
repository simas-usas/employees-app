const tabsReducerDefaultState = [];

export default (state = tabsReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TAB':
      return [
          ...state,
          action.id
    ];
    case 'REMOVE_TAB':
      return state.filter(( id ) => id !== action.id);
    default:
      return state;
  }
};
