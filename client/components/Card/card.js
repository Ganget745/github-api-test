import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { addToFavorite } from '../../redux/reducers/favorite'

import 'bootstrap-4-grid'
import './card.scss'

const Card = (props) => {
  const { data } = props
  const dispatch = useDispatch()
  const localData = JSON.parse(localStorage.getItem('favorite-list'))

  const [Startoggle, setStarToggle] = useState(false)

  const testFunc = () => {
    dispatch(addToFavorite(data))
    setStarToggle(!Startoggle)
  }

  console.log(localData.favorite.favoriteList)
  return (
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img" src={data.owner.avatar_url} alt="card img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><span>Name:</span> {data.name}</h5>
            <p className="card-rating"><span>Watchers:</span> {data.watchers}</p>
            <div className="btn-panel">
              <button type="button" className="view-more">View More</button>
              <button type="button" className="favorite" onClick={testFunc}>star</button>
            </div>
            {Startoggle ? <div className="star">STAR</div> : <div className="star">123</div>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card


// const [Startoggle, setStarToggle] = useState(false)

// const addFavorite = () => {
//   setStarToggle(!Startoggle)
// }