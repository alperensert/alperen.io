import { graphql, HeadFC } from "gatsby"
import React from "react"
import { BlogArticleList, Layout, SectionTitle, SEO } from "../components"
import { getParentFolder } from "../utils"

type TagListContext = {
    tag: string
}

interface TagListDataProps {
    allMarkdownRemark: Pick<Queries.MarkdownRemarkConnection, "nodes">
}

export const TagList: HeadFC<TagListDataProps, TagListContext> = ({
    data,
    pageContext: { tag },
}) => {
    return (
        <Layout>
            <section className="section-container">
                <SectionTitle beforeText="TAG" afterText={`#${tag}`} />
                <div className="my-20 flex flex-col space-y-20">
                    {data.allMarkdownRemark.nodes.map((post, index) => (
                        <BlogArticleList
                            frontmatter={{
                                ...(post.frontmatter as Queries.MarkdownRemarkFrontmatter),
                            }}
                            link={getParentFolder(
                                post.fileAbsolutePath as string
                            )}
                            key={index}
                        />
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default TagList

export const Head: HeadFC<object, TagListContext> = ({ pageContext }) => {
    return (
        <SEO
            title={"#" + pageContext.tag}
            description={`Blog posts from alperen.io which tagged as #${pageContext.tag}`}
        />
    )
}

export const pageQuery = graphql`
    query TagList($tag: String) {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/content/(blog)/" }
                frontmatter: { tags: { in: [$tag] } }
            }
            sort: { frontmatter: { date: DESC } }
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
