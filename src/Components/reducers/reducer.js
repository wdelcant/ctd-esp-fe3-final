export const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return { ...state, data: action.payload };
    case 'GET_DETAIL':
      return { ...state, dentistSelected: action.payload };
    case 'ADD_FAV':
      return { ...state, favs: [...state.favs, action.payload] };
    case 'DEL_FAV':
      return {
        ...state,
        favs: state.favs.filter(fav => fav.id !== action.payload.id),
      };
    case 'CLEAR_FAVS':
      return { ...state, favs: [] };
    case 'CHANGE_THEME':
      return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
    default:
      return state;
  }
};
