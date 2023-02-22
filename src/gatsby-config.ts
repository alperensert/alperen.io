import type { GatsbyConfig } from "gatsby"
import dotenv from "dotenv"

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
    siteMetadata: {
        title: process.env.ALPEREN_SITE_TITLE,
        description: process.env.ALPEREN_SITE_DESCRIPTION,
        keywords: process.env.ALPEREN_SITE_KEYWORDS?.replaceAll(
            ", ",
            ","
        ).split(","),
        owner: process.env.ALPEREN_SITE_OWNER,
        siteUrl: process.env.GATSBY_SITE_URL ?? "localhost",
        social: Object.entries(process.env)
            .filter(([k]) => k.includes("ALPEREN_SOCIAL_"))
            .map(([key, value]) => {
                return {
                    name: key.toLowerCase(),
                    url: value,
                }
            }),
    },
    graphqlTypegen: true,
    plugins: [
        {
            resolve: "gatsby-plugin-no-sourcemaps",
        },
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-sharp",
            options: {
                defaults: {
                    formats: ["auto", "webp"],
                    placeholder: "blurred",
                    quality: 50,
                    breakpoints: [750, 1080, 1366, 1920],
                    backgroundColor: "transparent",
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                name: "Alperen Sert",
                icon: "static/favicon@2x.png",
                short_name: "alperen",
                start_url: "/",
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: "standalone",
                lang: "en",
            },
        },
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/content/blog`,
                name: "blog",
            },
        },
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 590,
                            linkImagesToOriginal: true,
                        },
                    },
                    {
                        resolve: "gatsby-remark-responsive-iframe",
                        options: {
                            wrapperStyle: "margin-bottom: 1.0725rem",
                        },
                    },
                    {
                        resolve: "gatsby-remark-katex",
                        options: {
                            strict: "ignore",
                        },
                    },
                    {
                        resolve: "gatsby-remark-prismjs",
                        options: {
                            prompt: {
                                user: "root",
                                host: "localhost",
                                global: false,
                            },
                        },
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                    },
                    {
                        resolve: "gatsby-remark-smartypants",
                    },
                ],
            },
        },
        {
            resolve: "gatsby-plugin-google-gtag",
            options: {
                trackingIds: [
                    "G-7LXKH3T7X2",
                    "AW-CONVERSION_ID",
                    "DC-FLOODIGHT_ID",
                ],
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0,
                },
                pluginConfig: {
                    head: true,
                    respectDNT: true,
                    delayOnRouteUpdate: 0,
                },
            },
        },
        {
            resolve: "gatsby-plugin-robots-txt",
            options: {
                host: "https://alperen.io",
                sitemap: "https://alperen.io/sitemap-index.xml",
                env: {
                    development: {
                        policy: [{ userAgent: "*", disallow: ["/"] }],
                    },
                    production: {
                        policy: [{ userAgent: "*", allow: "/" }],
                    },
                },
            },
        },
        {
            resolve: "gatsby-plugin-sitemap",
            options: {
                query: `
                    query MyQuery {
                        allSitePage {
                            nodes {
                                path
                            }
                        }
                    }
                `,
                resolveSiteUrl: () =>
                    process.env.GATSBY_SITE_URL ?? "localhost",
                excludes: ["/40*/"],
            },
        },
    ],
}

export default config
