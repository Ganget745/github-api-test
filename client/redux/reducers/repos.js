import axios from 'axios'

const GET_REPOS_LIST = 'GET_REPOS_LIST'

const initialState = {
  reposList: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_LIST: {
      return {
        ...state,
        reposList: action.data
      }
    }
    default:
      return state
  }
}

export  function getReposList(value) {
  return (dispatch) => {
    axios(`https://api.github.com/users/${value}/repos`).then(({ data }) => {
      dispatch({ type: GET_REPOS_LIST, data })
    }).catch((err) => alert('Not Found', err))
  }
}
