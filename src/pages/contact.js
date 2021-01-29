import React from 'react'
import Layout from '../components/layout' // (../) means go up one directory
import Head from '../components/head'

function ContactPage(){
    return(
        <div>
            <Layout>
            <Head title="Contact"/>
                <h1>Contact</h1>
                <p>Tony Radin<br></br> anthonyradin123@gmail.com<br></br>  whatsapp: +1 289 894 1460</p>
                <p>My startup <a href="https://steampunkspectacles.com/" target="_blank" rel="noreferrer">Steampunk Spectacles</a></p> 
            </Layout>
        </div>
    )
}

export default ContactPage