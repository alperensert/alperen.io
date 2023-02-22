import React, { FC, PropsWithChildren } from "react"
import { useSite } from "../hooks"

interface HeadProps extends PropsWithChildren {
    title?: string
    description?: string
}

export const SEO: FC<HeadProps> = ({ children, title, description }) => {
    const site = useSite()
    const data = site?.siteMetadata
    if (!data) return <></>
    const defaultTitle = data.title ?? "quasmie"
    const defaultDescription =
        data.description ?? "A perfect site which built with GatsbyJS"
    const defaultKeywords = data.keywords ?? ["gatsbyjs", "quasmie"]
    const mail =
        data.social?.find((k) => k?.name?.includes("mail"))?.url ?? null
    return (
        <>
            <title id="siteTitle">
                {title ? `${title} | ` : null}
                {defaultTitle}
            </title>
            <meta
                id="desc"
                name="description"
                content={description ? description : defaultDescription}
            />
            <meta
                id="keywr"
                name="keywords"
                content={defaultKeywords.join(", ")}
            />
            {/* NO NEED TO EDIT TAGS */}
            <html lang="en" />
            <meta name="language" content="EN" />
            <meta name="subject" content="Web Development" />
            <meta name="copyright" content="alperen" />
            <meta name="robots" content="index,follow" />
            <meta
                name="author"
                content={`${process.env.ALPEREN_AUTHOR_NAME ?? "alperen sert"}${
                    mail ? `, ${mail}` : null
                }`}
            />
            <meta name="designer" content="Alperen Sert, business@alperen.io" />
            {mail ? <meta name="reply-to" content={mail} /> : null}
            {data.owner ? <meta name="owner" content={data.owner} /> : null}
            <meta name="url" content={process.env.GATSBY_SITE_URL} />
            <meta name="identifier-URL" content={process.env.GATSBY_SITE_URL} />
            <meta name="coverage" content="Worldwide" />
            <meta name="distribution" content="Global" />
            <meta name="rating" content="General" />
            <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
            />
            {children}
        </>
    )
}
