import React from 'react'
import {Link} from "react-router-dom"
import Layout from '../components/layout/Layout'


const Pagenotfound = () => {
  return (
    <Layout>
      <div className='pageNotFound'>
        <h1 className='pageNotFound-title'>404</h1>
        <h2 className='pageNotFound-heading'>Page not found</h2>
        <Link to='/' className='pageNotFound-btn' > Go Back</Link>
      </div>
    </Layout>
  )
}

export default Pagenotfound
