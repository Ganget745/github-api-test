const ADD_TO_FAVORITE = 'ADD_TO_FAVORITE'

const initialState = {
  favoriteList: []
}

const updateFavoriteList = (favoriteList, item) => {
  if (favoriteList.includes(item.id)) {
    for (let i = favoriteList.length -1; i >= 0; i-=1) {
      if (favoriteList[i] === item.id) {
        favoriteList.splice(i, 1)
        return [...favoriteList]
      }
    }
  }
    return [...favoriteList, item.id]
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