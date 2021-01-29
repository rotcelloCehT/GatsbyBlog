module.exports = {
    siteMetadata: {
        title: 'Full Stack Bootcamp!', 
        author: 'Anthony Radin'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        { // set up as object {} to add options
            resolve: 'gatsby-source-contentful',
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
                downloadLocal: true
            }
        },
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'src',
                path:  `${__dirname}/src/`
            }
        },
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-transformer-remark',
            options: {
                plugins: [ // array of plugins specific to the remark transformer
                    'gatsby-remark-relative-images',
                    {
                        resolve: 'gatsby-remark-images',
                        options: {
                            maxWidth: 750,
                            linkImagesToOriginal: false
                        }
                    }
                ]
            }
        }
    ]
}