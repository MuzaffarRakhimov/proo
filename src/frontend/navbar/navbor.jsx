
import { Link } from 'react-router-dom'
import './navbor.css'
import React from 'react'






export function Navbor (){

  return (
    <>
    <div className='nav'>
      <Link  to={'/home'}> <h3 className='link'  >Assosiy</h3> </Link>
      <Link to={'/home2'}><h3 className='link'>Bo'limlar</h3></Link>
      <Link to={'/home3'}><h3 className='link'>Mahsulotlar</h3></Link>
      <Link to={'/home4'}><h3 className='link'>Qabul bo'limi</h3></Link>
     <form action="#" method="get" className='form'>
     <input type="text" name="input" placeholder='search..' />
      <input type="submit" value="submit" />
     </form>

    </div>
    </>
  )
}
