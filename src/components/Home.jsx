import React from 'react'
import { Link } from 'react-router-dom'
import style from './home.module.css'
const Home = () => {
  return (
    <div className={style.mainContainer}>
    <div className={style.buttonDiv} >
        <Link to='/chartData'>
            <button className={`btn btn-secondary btn-lg ${style.button}`} type="button" class="btn btn-secondary btn-lg">Get Data</button>
        </Link>
    </div>
    </div>
    
  )
}

export default Home