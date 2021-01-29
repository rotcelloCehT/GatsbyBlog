import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Head from '../components/head'

import Layout from '../components/layout'
//  USED FOR MARKDOWNREMARK
// 1.query done 2.slug var created 3.provideve slug as prop to component bellows
// export const query = graphql` 
//     query ($slug: String!){
//         markdownRemark (
//             fields: {
//                 slug: {
//                 eq: $slug
//                 }
//             }){
//             frontmatter{
//                 title
//                 date
//             }
//             html
//         }
//     }

export const query = graphql`
    query($slug: String!){
        contentfulBlogPost(slug: {eq: $slug}) {
            title
            publishedDate(formatString: "MMMM Do, YYYY")
            body{
                raw
                references {
                    fixed(width: 750) {
                      width
                      height
                      src
                  }
                }
            }
        }
    }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            "embedded-asset-block": (node) => {
                const alt = "test"
                const url = props.data.contentfulBlogPost.body.references[0].fixed.src
                return (
                <img src={url} alt={alt}/>
                )
            }
        }
    }
    return(
        <Layout>
            <Head title={props.data.contentfulBlogPost.title}/>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            <div>{renderRichText(props.data.contentfulBlogPost.body, options)}</div>
        </Layout>

    )
}
export default Blog