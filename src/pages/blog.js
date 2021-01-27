import React from 'react'
import Layout from '../components/layout' // (../) means go up one directory
import { Link, graphql, useStaticQuery} from 'gatsby'

function BlogPage(){
    const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark{
                edges{
                  node{
                    frontmatter{
                      title
                      date
                    }
                    fields{
                        slug
                    }
                  }
                }
              }
        }
    `)
    return(
        <div>
            <Layout>
                <h1>Blog</h1>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => { // array of objects mapped to JSX. function (edge) called on time for each object
                        return( // this is hte jsx returneds
                            <li>
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h2>{edge.node.frontmatter.title}</h2>
                                    <p>{edge.node.frontmatter.date}</p>
                                </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}

export default BlogPage