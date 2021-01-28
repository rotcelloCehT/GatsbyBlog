const path = require(`path`)

module.exports.createPages = async ({ graphql, actions }) => { // graphql in this case is not imported, it's a function 
    const { createPage } = actions                      // to which we pass a string...
    //1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js') // provides path as string ('')    
    //2. get markdown data
    const res = await graphql(`
        query{
            allContentfulBlogPost{
                edges{
                    node{
                        slug
                    }
                }
            }
        }
    `)
    //3. create pages
    res.data.allContentfulBlogPost.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.slug}`,
            context: {
                slug: edge.node.slug // consider as ID.
            }
        })
    })
}