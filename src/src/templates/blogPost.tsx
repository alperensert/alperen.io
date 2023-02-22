import { graphql, HeadFC, HeadProps, Link } from "gatsby"
import React, { FC } from "react"
import { Layout, SectionTitle, SEO } from "../components"
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image"
import { IoTime } from "react-icons/io5"

export const BlogPost: FC<
    HeadProps<Pick<Queries.Query, "markdownRemark">, object, object>
> = ({ data }) => {
    if (!data.markdownRemark) return <></>
    const postDetail = data.markdownRemark.frontmatter
    if (!postDetail) return <></>
    return (
        <Layout>
            <section className="post-container portfolio-post px-10 xl:px-0">
                <SectionTitle
                    beforeText={
                        (postDetail.beforeTitle as string) || "BLOG POST"
                    }
                    afterText={postDetail.title as string}
                />
                <div className="my-20 flex flex-col space-y-10 lg:flex-row lg:space-x-10 lg:space-y-0">
                    <GatsbyImage
                        image={
                            postDetail.cover?.childImageSharp
                                ?.gatsbyImageData as IGatsbyImageData
                        }
                        className="w-full lg:h-fit lg:max-w-[40%]"
                        imgClassName="object-scale-down"
                        alt="Cover Image"
                    />
                    <div>
                        <time className="flex items-center space-x-2 text-sm text-gray-400">
                            <IoTime size={18} />
                            <span>{postDetail.date}</span>
                        </time>
                        <div
                            className="post-detail"
                            dangerouslySetInnerHTML={{
                                __html: data.markdownRemark.html as string,
                            }}
                        ></div>
                        <ul className="my-10 flex space-x-4">
                            {postDetail.tags?.map((t, i) => (
                                <li key={i}>
                                    <Link to={`/tag/${t?.toLocaleLowerCase()}`}>
                                        #{t}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default BlogPost

export const Head: HeadFC<Pick<Queries.Query, "markdownRemark">, object> = ({
    data,
}) => {
    return (
        <SEO
            title={data.markdownRemark?.frontmatter?.title as string}
            description={
                data.markdownRemark?.frontmatter?.description as string
            }
        />
    )
}

export const pageQuery = graphql`
    query GetBlogPost($postId: String!) {
        markdownRemark(id: { eq: $postId }) {
            id
            frontmatter {
                beforeTitle
                date(formatString: "DD MMM, YYYY, hh:mm")
                title
                tags
                description
                cover {
                    childImageSharp {
                        gatsbyImageData(placeholder: DOMINANT_COLOR)
                    }
                }
            }
            html
        }
    }
`
