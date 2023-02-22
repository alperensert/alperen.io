import { graphql, HeadFC } from "gatsby"
import React from "react"
import {
    BlogArticleList,
    Layout,
    Pagination,
    SectionTitle,
    SEO,
} from "../components"
import { getParentFolder } from "../utils"

type BlogListDataProps = Pick<Queries.Query, "allMarkdownRemark">

export const BlogList: HeadFC<BlogListDataProps, alperen.PaginationContext> = ({
    data,
    pageContext,
}) => {
    return (
        <Layout>
            <section className="section-container">
                <SectionTitle beforeText="BLOG" afterText="POSTS" />
                <div className="my-20 flex flex-col space-y-20">
                    {data.allMarkdownRemark.nodes.map((post, index) => (
                        <BlogArticleList
                            link={getParentFolder(
                                post.fileAbsolutePath as string
                            )}
                            frontmatter={post.frontmatter}
                            key={index}
                        />
                    ))}
                </div>
                <Pagination
                    limit={pageContext.limit}
                    skip={pageContext.skip}
                    numPages={pageContext.numPages}
                    currentPage={pageContext.currentPage}
                />
            </section>
        </Layout>
    )
}

export default BlogList

export const Head = () => <SEO title="Blog" />

export const pageQuery = graphql`
    query BlogList($skip: Int!, $limit: Int!) {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/content/(blog)/" } }
            sort: { frontmatter: { date: DESC } }
            limit: $limit
            skip: $skip
        ) {
            nodes {
                frontmatter {
                    title
                    tags
                    description
                    date
                }
                fileAbsolutePath
            }
        }
    }
`
