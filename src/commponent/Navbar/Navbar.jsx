import React from 'react'
import { Link } from 'react-router-dom'
import imge from '../img/logo.png'

export default function Navbar({ userData, logOut }) {
  return (
    <>
      <nav className="navbar py-3  navbar-expand-lg navbar-dark bg-dark">
        <div className="container d-flex justify-content-around">
          <div className='vvv'>
            <Link className='text-white  ' to="/"><img className='imgg' src={imge} alt="" />Game Over</Link>
          </div>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse  justify-content-between navbar-collapse mx-3" id="navbarNavDropdown">
            {userData ? <ul className="navbar-nav ms-5 ">
              <li className="nav-item">
                <Link className="nav-link text-white  active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ahmed" to="/all">All</Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link ahmed dropdown-toggle" to="platform/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Platform
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="platform/bc">pc</Link></li>
                  <li><Link className="dropdown-item" to="platform/browser">browser</Link></li>

                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link ahmed dropdown-toggle" to="sortby" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  sort-by
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="sortby/release-date">release-date</Link></li>
                  <li><Link className="dropdown-item" to="sortby/popularity">popularity</Link></li>
                  <li><Link className="dropdown-item" to="sortby/alphabetical">alphabetical</Link></li>
                  <li><Link className="dropdown-item" to="sortby/relevance">relevance</Link></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link ahmed dropdown-toggle" to="categories" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="categories/racing">racing</Link></li>
                  <li><Link className="dropdown-item" to="categories/sports">sports</Link></li>
                  <li><Link className="dropdown-item" to="categories/social">social</Link></li>
                  <li><Link className="dropdown-item" to="categories/shooter">shooter</Link></li>
                  <li><Link className="dropdown-item" to="categories/open-world">open-world</Link></li>
                  <li><Link className="dropdown-item" to="categories/zombie">zombie</Link></li>
                  <li><Link className="dropdown-item" to="categories/fantasy">fantasy</Link></li>
                  <li><Link className="dropdown-item" to="categories/action-rpg">action-rpg</Link></li>
                  <li><Link className="dropdown-item" to="categories/action">action</Link></li>
                  <li><Link className="dropdown-item" to="categories/flight">flight</Link></li>
                  <li><Link className="dropdown-item" to="categories/battle-royale">battel-royale</Link></li>

                </ul>
              </li>
            </ul> : ''}

            <ul className="navbar-nav mx-4 ">

              {userData ? <li className="nav-item">
                <Link className="nav-link mesi btn btn-outline-ftg  px-3 ahmed" onClick={logOut} to="/login">Log Out</Link>
              </li> : <div className=' ahm '>
                <li className="nav-item">
                  <Link className="nav-link text-white  active" aria-current="page" to="login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="mt-1 mesi ahmed mx-2 btn btn-outline-ftg m-auto" to="/joinfree">Joinfree</Link>
                </li>
              </div>}





            </ul>
          </div>


        </div>
      </nav>
    </>
  )
}



