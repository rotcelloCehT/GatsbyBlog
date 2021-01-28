import React from 'react'
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
//  USED FOR MARKDOWNREMARK
// 1.query done 2.slug var created 3.prive slug as prop to component bellows
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
            }
        }
    }
`

const Blog = (props) => {
    console.log(props);
    return(
        <Layout>
            <h1>{props.data.contentfulBlogPost.title}</h1>
            <p>{props.data.contentfulBlogPost.publishedDate}</p>
            {documentToReactComponents(props.data.contentfulBlogPost.body)}
        </Layout>

    )
}
export default Blog