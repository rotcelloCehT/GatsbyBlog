import React from 'react'
import { Link, graphql, useStaticQuery} from 'gatsby'
//import './header.scss'//importing style sheet into header bleeds onto other components
// headerStyle is object with property link
import headerStyle from './header.module.scss' // deafult export "headerStyle" contains props for every class defined in module


function Header(){
    // call useStaticQuery as Function
    // graphql is function
    // `` is template string
    //  graphql is function
    // This ^^^^^^^^^^^^^^^ is call a Tagged Template Literral
    // Allows `this string` to be processes by graphql(function) and converts into something that can be used.
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
            title
            author
                    
            }
        }
        
        }
    `)
    return(
        <header className={headerStyle.header}>
            <nav>
                <h1><Link className={headerStyle.title} activeClassName={headerStyle.activeNavItem} to="/">{data.site.siteMetadata.title}</Link></h1>
                <ul className={headerStyle.navList}>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/">Home</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/blog">Blog</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/contact">Contact</Link></li>
                    <li><Link className={headerStyle.navItem} activeClassName={headerStyle.activeNavItem} to="/about">About</Link></li>
                </ul>
            </nav>
        </header>
    )
}
export default Header