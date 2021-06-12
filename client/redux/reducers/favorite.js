const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'

const initialState = {
  favoriteList: []
}

const updateFavoriteList = (favoriteList, item) => {
  // const itemInFavorite = favoriteList.find((favoriteItem) => favoriteItem.id === item.id)
  const newItem = [...favoriteList, item.id]
  return newItem
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVORITE: {
      return {
        ...state,
        favoriteList: updateFavoriteList(state.favoriteList, action.item)
      }
    }
    default:
      return state
  }
}

export function addToFavorite(item) {
  return { type: ADD_TO_FAVORITE, item }
}