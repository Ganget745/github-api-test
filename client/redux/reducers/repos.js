import axios from 'axios'

const GET_REPOS_LIST = 'GET_REPOS_LIST'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
  reposList: [],
  currentPage: 1,
  perPage: 3,
  totalCount: 4
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

// export function getTotalCount(value) {
//   return {
//     axios(`https://api.github.com/users/${value}/repos`).then(({}))
//   }
// }


// https://api.github.com/users/${value}/repos?page=1&per_page=2