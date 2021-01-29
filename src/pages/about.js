import React from 'react';
import { Link } from 'gatsby'
import Layout from '../components/layout' // (../) means go up one directory
import Head from '../components/head'

function AboutPage(){
    return(
        <div>
            <Layout>
            <Head title="About"/>
            <h1>About</h1>
            <p>Blog website created using HTML, CSS, React and Gatsby</p>
            <p>Need a developer? <Link to="/contact">Contact me.</Link></p> 
            </Layout>
        </div>
    )
}

export default AboutPage