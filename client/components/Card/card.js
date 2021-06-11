import React, { useState } from 'react'

import 'bootstrap-4-grid'

import './card.scss'

const Card = ({ items }) => {

  const [Startoggle, setStarToggle] = useState(false)

  const addFavorite = () => {
    setStarToggle(!Startoggle)
  }

  const StorageTest = () => {
    localStorage.setItem(`${it.id}`)
  }

  return (
  <div>
    {items.map((it) => (
      <div className="card mb-3" key={it.id}>
        <div className="row">
          <div className="col-md-4">
            <img className="card-img" src={it.owner.avatar_url} alt="card img" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title"><span>Name:</span> {it.name}</h5>
              <p className="card-rating"><span>Watchers:</span> {it.watchers}</p>
              <div className="btn-panel">
                <button type="button" className="view-more">View More</button>
                <button type="button" className="favorite" onClick={StorageTest}>star</button>
              </div>
              {Startoggle ? <div className="star">STAR</div> : <div className="star">123</div>}
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
  )
}

export default Card