import React, { useEffect } from 'react'
import { history } from '../../redux'

import './splashscreen.scss'
import 'bootstrap-4-grid'

const SplashScreen = () => {

  useEffect(() => {
    setTimeout(() => history.push('/main'), 4000)
  },[])
  return (
    <div className="splashscreen">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-12">
            <h2 className="test-work">Тестовое Задание</h2>
            <h5 className="my-name">Гречаный Владислав</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SplashScreen
