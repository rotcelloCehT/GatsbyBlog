import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'

// 1.query done 2.slug var created 3.prive slug as prop to component bellows
export const query = graphql` 
    query ($slug: String!){
        markdownRemark (
            fields: {
                slug: {
                eq: $slug
                }
            }){
            frontmatter{
                title
                date
            }
            html
        }
    }
`

const Blog = (props) => {
    return(
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: props.data.markdownRemark.html}}></div>
        </Layout>

    )
}
export default Blog