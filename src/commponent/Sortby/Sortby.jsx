import React from 'react'
import { Helmet } from 'react-helmet'
import { Outlet } from 'react-router-dom'

export default function Sortby() {
  return (
    <>
     <Helmet>
                <meta charSet="utf-8" />
                <title>Storby</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
      <div className='container'>
    <Outlet/>
    </div>
    </>
  )
}
