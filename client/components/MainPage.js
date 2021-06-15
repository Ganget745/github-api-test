import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import Card from './Card/card'
import Sort from './Sort/sort'

import { getReposList, setCurrentPage } from '../redux/reducers/repos'

import 'bootstrap-4-grid'
import './mainpage.scss'

const MainPage = () => {

  const currentPage = useSelector((store) => store.repos.currentPage)
  const perPage = useSelector((store) => store.repos.perPage)
  const reposList = useSelector((store) => store.repos.reposList)
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const [totalCount, setTotalCount] = useState([1])
  useEffect(() => {
    dispatch(getReposList(value, currentPage, perPage))
  },[currentPage])

  const searchFunc = () => {
    axios.get(`https://api.github.com/users/${value}/repos`).then((it) => {
      setTotalCount(it.data)
    }).catch((err) => console.log(err))
      dispatch(setCurrentPage(1))
      dispatch(getReposList(value, currentPage, perPage))
  }
  const pagesLength = Math.ceil(totalCount.length / perPage)
  const pages = new Array(pagesLength).fill(0).map((it, index) => index + 1)


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
                <input type="text" name="name" value={value} onChange={onChange} id="input-field" />
                {value.length === 0 ? <p className="p-valid">Mininum 1 character</p> : null}
              </div>
            </div>
            <button className="search-button" type="button" id="search-button" onClick={searchFunc} >
              Search
            </button>
            <Sort />
            <div className="col-12">
              {reposList.map((item) => {
                return (
                  <div key={item.id}>
                    <Card data={item} />
                  </div>
                )
              })}
              <div className="pages">
                {pages.map((page, index) => (
                  <button type="button" key={index}
                  className={currentPage === page ? "current-page" : "page"}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</button>))}
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}


export default MainPage