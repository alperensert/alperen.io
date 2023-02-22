import React from "react"
import { Link } from "gatsby"
import { HamburgerMenu } from "./hamburgerMenu"
import { StaticImage } from "gatsby-plugin-image"

export const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <div className="hidden h-3 dark:block">
                        <StaticImage
                            placeholder="blurred"
                            width={128}
                            src="../images/logo-dark.png"
                            className="pointer-events-none hidden w-32 select-none dark:block"
                            alt="alperen"
                            objectFit="contain"
                        />
                    </div>
                    <div className="block h-3 dark:hidden">
                        <StaticImage
                            placeholder="dominantColor"
                            width={128}
                            src="../images/logo.png"
                            className="pointer-events-none block w-32 select-none dark:hidden"
                            alt="alperen"
                            objectFit="contain"
                        />
                    </div>
                </Link>
                <nav className="header">
                    <Link to="/" activeClassName="active">
                        Home
                    </Link>
                    <Link to="/about" activeClassName="active">
                        About
                    </Link>
                    <Link to="/blog" partiallyActive activeClassName="active">
                        Blog
                    </Link>
                    <Link to="/contact" activeClassName="active">
                        Contact
                    </Link>
                </nav>
                <HamburgerMenu />
            </div>
        </header>
    )
}
