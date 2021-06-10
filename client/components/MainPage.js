import React, { useState } from 'react'
import axios from 'axios'

import Card from './Card/card'

import 'bootstrap-4-grid'
import './mainpage.scss'

const MainPage = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }

  const [userRepository, setUserRepository] = useState([])

  const SearchFunction = () => {
    axios.get(`https://api.github.com/users/${value}/repos`).then((it) => {
      setUserRepository(it.data)
    })
  }
  console.log(userRepository)
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
            <button className="search-button" type="button" id="search-button" onClick={SearchFunction} >
              Search
            </button>
            <div className="col-12">
                <Card
                items={userRepository}
                />
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}


export default MainPage
