import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './chooserepo.scss'

const ChooseRepo = () => {
  const { userName } = useParams()
  const { repositoryName } = useParams()
  const [chooserepo, setChooserepo] = useState()
  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((it) => {
        setChooserepo(it.data)
      })
  }, [])
  return (
    <div className="repo-content">
      <div className="container">
        <div className="row justify-content-center text-center">

          <form className="cr-form">
            <div className="col-12">
              <div className="description">
                {chooserepo}
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )

}


export default React.memo(ChooseRepo)
