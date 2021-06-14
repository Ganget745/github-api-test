import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { addToFavorite } from '../../redux/reducers/favorite'

import starSvg from '../../assets/images/star.svg'
import 'bootstrap-4-grid'
import './card.scss'

const Card = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const localData = JSON.parse(localStorage.getItem('favorite-list'))
  const [Startoggle, setStarToggle] = useState()
  const favoriteFunc = () => {
    dispatch(addToFavorite(data))
    setStarToggle(!Startoggle)
  }


  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img" src={data.owner.avatar_url} alt="card img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><span>Name:</span> {data.name} </h5>
            <p className="card-rating"><span>Watchers:</span> {data.watchers}</p>
            <div className="btn-panel">

              <Link to={`/${data.full_name}`} type="button" className="view-more">View More</Link>

              <button type="button" className="favorite" onClick={favoriteFunc}>Add to favorite</button>
            </div>
            {localData.favorite.favoriteList.includes(data.id) ? <div className="star"><img src={starSvg} alt="STAR" /></div> : null}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card