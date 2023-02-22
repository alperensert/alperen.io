declare namespace alperen {
    type ThemeMode = "dark" | "light" | "system"

    interface SocialLink {
        name: string
        url: string
    }

    interface PaginationContext {
        limit: Queries.Maybe<number>
        skip: Queries.Maybe<number>
        numPages: Queries.Maybe<number>
        currentPage: Queries.Maybe<number>
    }

    interface SiteConfig {
        authorName: string
        siteTitle: string
        titleSeperator?: string
        socialLinks?: SocialSiteConfig
        keywords?: string[]
        siteDescription?: string
    }

    interface SocialSiteConfig {
        twitter?: string
        instagram?: string
        github?: string
        email?: string
    }
}

declare namespace NodeJS {
    interface ProcessEnv {
        NODE_ENV: "development" | "production"
        GATSBY_SITE_URL?: string
        ALPEREN_SITE_TITLE?: string
        ALPEREN_SITE_DESCRIPTION?: string
        ALPEREN_SITE_OWNER?: string
        ALPEREN_SITE_KEYWORDS?: string
        ALPEREN_SOCIAL_INSTAGRAM?: string
        ALPEREN_SOCIAL_GITHUB?: string
        ALPEREN_SOCIAL_TWITTER?: string
        ALPEREN_SOCIAL_MAIL?: string
        ALPEREN_SITE_VERSION?: string
    }
}

declare module "*.jpg" {
    export default "" as string
}
