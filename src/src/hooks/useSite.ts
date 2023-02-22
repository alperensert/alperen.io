import { graphql, useStaticQuery } from "gatsby"

export const useSite = () => {
    const { site }: Queries.Query = useStaticQuery(graphql`
        query SiteMetadataQuery {
            site {
                siteMetadata {
                    description
                    keywords
                    siteUrl
                    title
                    owner
                    social {
                        name
                        url
                    }
                }
            }
        }
    `)
    return site
}
