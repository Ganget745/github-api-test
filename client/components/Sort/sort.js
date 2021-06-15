import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { setSort } from '../../redux/reducers/repos'

import 'bootstrap-4-grid'
import './sort.scss'

const Sort = () => {
  const [toggled, setToggled] = useState(true)
  const [sortMethod, setSortMethod] = useState('')
  const [activeSort, setActiveSort] = useState('')
  const dispatch = useDispatch()
  const clickAction = (sortType) => {
    return () => {
      setToggled(!toggled)
      setSortMethod(toggled ? '▲' : '▼')
      setActiveSort(sortType)
      dispatch(setSort(sortType, toggled))
    }
  }
  return (
    <div className="col-12">
      <button id="sort-name" type="button" className="sort" onClick={clickAction('abc')}>
        Sort by alphabet {activeSort === 'abc' && sortMethod}
      </button>
    </div>
  )
}

export default Sort
