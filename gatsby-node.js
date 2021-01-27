const path = require(`path`)
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }

}


module.exports.createPages = async ({ graphql, actions }) => { // graphql in this case is not imported, it's a function 
    const { createPage } = actions                      // to which we pass a string...
    //1. get path to template
    const blogTemplate = path.resolve('./src/templates/blog.js') // provides path as string ('')    
    //2. get markdown data
    const res = await graphql(`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        fields {
                        slug
                        }
                    }
                }
            }
        }
    `)
    //3. create pages
    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug // consider as ID.
            }
        })
    })
}