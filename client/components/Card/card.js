import React from 'react'

import 'bootstrap-4-grid'

import './card.scss'

const Card = () => {
  return(
    <div className="card mb-3">
      <div className="row">
        <div className="col-md-4">
          <img className="card-img" src="https://aliradar.com/api/image?url=https%3A%2F%2Fae01.alicdn.com%2Fkf%2FHc8c86ce051c445e2a8c964d4650e0d308%2FElectric-Blanket-Muilticolor-Manta-Electrica-Electric-Heating-Blanket-Body-Warmer-Heated-Blanket-Couverture-free-shipp.jpg_220x220.jpg_Q70.jpg" alt="card img" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title"><span>Name:</span> Test-Landing</h5>
            <p className="card-rating"><span>Rating:</span> 500 points</p>
            <div className="btn-panel">
              <button type="button" className="view-more">View More</button>
              <button type="button" className="favorite">star</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card