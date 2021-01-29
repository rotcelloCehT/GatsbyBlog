import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout' // (../) means go up one directory
import Head from '../components/head'


function IndexPage(){
  return(
    <Layout>
      <Head title="Home"/>
      <h1>Hello,</h1>
      <h2>I'm Tony, a full stack-developer living in Toronto.</h2>
      {/* Use link instead of <a> to preload and make faster */}
      <p>Need a developer? <Link to="/contact">Contact me.</Link></p>
    </Layout>
  )
}

export default IndexPage