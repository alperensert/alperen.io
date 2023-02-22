import { Link } from "gatsby"
import React, { FC } from "react"
import { IoArrowForwardOutline } from "react-icons/io5"

interface BlogArticleListProps
    extends Pick<Queries.MarkdownRemark, "frontmatter"> {
    link: string
}

export const BlogArticleList: FC<BlogArticleListProps> = ({
    link,
    frontmatter,
}) => {
    const monthNames = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
    ]
    const articleLink = `/blog/${link}`
    const articleDate = new Date(frontmatter?.date as string)
    return (
        <article className="flex">
            <time className="hidden w-4/12 select-none justify-center text-center md:flex md:flex-col">
                <span className="block text-8xl font-bold dark:text-gray-200">
                    {articleDate.getDate()}
                </span>
                <span className="-ml-3 mt-2 block text-sm font-light text-gray-400">
                    {monthNames[articleDate.getMonth()].toLocaleUpperCase()},{" "}
                    {articleDate.getFullYear()}
                </span>
            </time>
            <div className="flex w-full flex-col justify-center space-y-4 md:w-8/12">
                <ul className="flex space-x-4 text-sm">
                    {frontmatter?.tags?.map((tag, index) => (
                        <li className="text-primary" key={index}>
                            <Link to={`/tag/${tag?.toLocaleLowerCase()}`}>
                                #{tag}
                            </Link>
                        </li>
                    ))}
                </ul>
                <Link to={articleLink} className="w-fit">
                    <h3 className="text-xl font-bold text-black dark:text-white">
                        {frontmatter?.title}
                    </h3>
                </Link>
                <p className="text-sm leading-7 text-gray-700 dark:text-gray-300">
                    {frontmatter?.description?.substring(0, 180) + "..."}
                </p>
                <Link
                    to={articleLink}
                    className="flex w-fit items-center space-x-1 text-sm font-semibold text-gray-700 dark:text-gray-500"
                >
                    <span>READ MORE</span>
                    <IoArrowForwardOutline size={18} />
                </Link>
            </div>
        </article>
    )
}
