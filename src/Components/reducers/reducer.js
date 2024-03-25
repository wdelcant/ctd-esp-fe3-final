export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, data: action.payload };
    case 'GET_DETAIL':
      return { ...state, doctorSelected: action.payload };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'DELETE_FAV':
      const filteredFavs = state.favs.filter(fav => fav.id !== action.payload);
      return { ...state, favs: filteredFavs };
    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};
