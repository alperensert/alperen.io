import { GatsbyNode } from "gatsby"
import path from "path"
import { getParentFolder } from "./src/utils"

export const createPages: GatsbyNode["createPages"] = async ({
    actions,
    graphql,
}) => {
    const blogPost = path.resolve(`./src/templates/blogPost.tsx`)
    const blogList = path.resolve(`./src/templates/blogList.tsx`)
    const tagList = path.resolve(`./src/templates/tagList.tsx`)
    const { createPage } = actions
    return graphql<Queries.Query>(
        `
            query BlogQuery {
                allMarkdownRemark(
                    filter: { fileAbsolutePath: { regex: "/content/(blog)/" } }
                ) {
                    edges {
                        node {
                            id
                            fileAbsolutePath
                            frontmatter {
                                date
                                title
                                tags
                            }
                        }
                    }
                }
            }
        `
    ).then(({ data, errors }) => {
        if (errors || !data || !data.allMarkdownRemark) throw errors
        const blogPosts = data.allMarkdownRemark.edges
        blogPosts.forEach((post, index) => {
            const previous =
                index === blogPosts.length - 1
                    ? null
                    : blogPosts[index + 1].node
            const next = index === 0 ? null : blogPosts[index - 1].node
            const link = getParentFolder(post.node.fileAbsolutePath as string)
            createPage({
                path: `/blog/${link}`,
                component: blogPost,
                context: {
                    postId: post.node.id,
                    previous,
                    next,
                },
            })
        })

        const postsPerPage = 2
        const numPages = Math.ceil(blogPosts.length / postsPerPage)

        Array.from({ length: numPages }).forEach((_, i) => {
            createPage({
                path: i === 0 ? `/blog` : `/blog/page/${i + 1}`,
                component: blogList,
                context: {
                    limit: postsPerPage,
                    skip: i * postsPerPage,
                    numPages,
                    currentPage: i + 1,
                },
            })
        })

        const allTags = new Set<string>()
        blogPosts.forEach(({ node }) =>
            node.frontmatter?.tags?.forEach((tag) => allTags.add(tag as string))
        )
        allTags.forEach((tag) => {
            createPage({
                path: `/tag/${tag.toLocaleLowerCase()}`,
                component: tagList,
                context: {
                    tag,
                },
            })
        })
    })
}
