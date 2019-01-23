const filtersReducerDefaultState = {
  search: '',
};

export default (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_SEARCH_TEXT':
      return {
        ...state,
        search: action.search
      };
    default:
      return state;
  }
};
