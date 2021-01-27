import React from 'react'
import Footer from '../components/footer' // (../) means go up one directory
import Header from '../components/header' // (../) means go up one directory
import "../styles/index.scss"
import layoutStyles from './layout.module.scss'

function Layout(props){ // props is what's inside the layout tags.
    return(
        <div className={layoutStyles.container}>
             {/* USE CAMEL CASE IN JS FILE TO REFERENCE SCSS WITH "-" */}
            <div className={layoutStyles.content}> 
                <Header />
                {props.children}
            </div>
            <Footer />
        </div>
        
    )
}
export default Layout