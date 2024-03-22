export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, recipeList: action.payload };
    case 'GET_RECIPE':
      return { ...state, recipeSelected: action.payload };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'DELETE_FAV':
      // Realizar una operación utilizando .filter()
      return {};
  }
};
