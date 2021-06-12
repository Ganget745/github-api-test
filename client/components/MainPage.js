import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Card from './Card/card'

import { getReposList } from '../redux/reducers/repos'

import 'bootstrap-4-grid'
import './mainpage.scss'

const MainPage = () => {

  const reposList = useSelector((store) => store.repos.reposList)
  const dispatch = useDispatch()

  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const searchFunc = () => {
      dispatch(getReposList(value))
  }

  return (
    <div className="search-form">
      <div className="container">
        <div className="row justify-content-center text-center">

          <form className="input-form">
            <div className="col-12 pad_0">
              <div className="input-box">
                <div className="form-header">
                  <p>Github Nickname:</p>
                </div>
                <input type="text" value={value} onChange={onChange} id="input-field" />
              </div>
            </div>
            <button className="search-button" type="button" id="search-button" onClick={searchFunc} >
              Search
            </button>
            <div className="col-12">
              {reposList.map((item) => {
                return (
                  <div key={item.id}>
                    <Card data={item} />
                  </div>
                )
              })}
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}


export default MainPage


// const [errState, setErr] = useState(false)
// const [userRepository, setUserRepository] = useState([])

// async function SearchFunction() {
//   try {
//     const result = await axios.get(`https://api.github.com/users/${value}/repos`)
//     setUserRepository(result.data)
//     setErr(false)
//   } catch (err) {
//     setErr(!errState)
//     console.log('ERROR: Not Found', err)
//   }
// }