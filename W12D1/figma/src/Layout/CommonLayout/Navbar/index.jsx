import { NavLink } from "react-router-dom";
import style from "./index.module.scss";
import React, { useEffect, useState } from 'react'

function Navbar() {

  const [isResponsive, setIsResponsive] = useState(false)

  useEffect(() => {
    if (innerWidth<992) {
      setIsResponsive(true)
      console.log(isResponsive);
    }
  }, [innerWidth])

  return (
    <nav id={style['nav']}>
      <div className={style.container}>
        <div className={style.Lpart}>
          <strong className={style.strong}>Exclusive</strong>
        </div>
        <div className={style.Mpart}>
          <ul className={style.navList}>
            <li><NavLink to='/' activeclassname={style.active}>Home</NavLink></li>
            <li><NavLink to='/contact' activeclassname={style.active}>Contact</NavLink></li>
            <li><NavLink to='/about' activeclassname={style.active}>About</NavLink></li>
            <li><NavLink to='/login' activeclassname={style.active}>Sign In</NavLink></li>
          </ul>
        </div>
        <div className={style.Rpart}>
          <div className={style.searchBox}>
            <input type="text" placeholder="What are you looking for ?" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          <div className={style.IconContainer}>
            <i className="fa-regular fa-heart">
              <div className={style.countBox}>2</div>
            </i>
            <i className="fa-solid fa-basket-shopping">
              <div className={style.countBox}>2</div>
            </i>
            <i className={`fa-${'regular'} fa-circle-user`}></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar