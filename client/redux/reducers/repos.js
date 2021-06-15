import axios from 'axios'

const GET_REPOS_LIST = 'GET_REPOS_LIST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_SORT = 'SET_SORT'

const initialState = {
  reposList: [],
  currentPage: 1,
  perPage: 3,
  totalCount: 4,
  sortType: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_LIST: {
      return {
        ...state,
        reposList: action.data,
        totalCount: action.data.totalCount
      }
    }
    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.data
      }
    }
    case SET_SORT: {
      const sortedList = [...state.reposList].sort((a, b) => {
        if (action.name !== 'abc') {
          if (a.price < b.price) {
            return -1
          }
          if (a.price > b.price) {
            return 1
          }
        }
        if (a.title < b.title) {
          return -1
        }
        if (a.title > b.title) {
          return 1
        }
        return 0
      })
      if (action.sortType === false) {
        return {
          ...state,
          reposList: sortedList.reverse()
        }
      }
      return {
        ...state,
        reposList: sortedList
      }
    }
    default:
      return state
  }
}

export function setCurrentPage(page) {
  return { type: SET_CURRENT_PAGE, data:page}
}

export  function getReposList(value, currentPage, perPage) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${value}/repos?per_page=${perPage}&page=${currentPage}`).then(({ data }) => {
      dispatch({ type: GET_REPOS_LIST, data })
    }).catch((err) => console.log('Not Found', err))
  }
}

export function setSort(name, sortType) {
  return {
    type: SET_SORT,
    sortType,
    name
  }
}
