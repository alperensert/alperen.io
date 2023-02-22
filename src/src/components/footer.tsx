import React from "react"
import pkg from "../../package.json"

export const Footer = () => {
    const year = new Date().getFullYear()
    return (
        <footer className="footer w-full">
            <div>
                {year} ©{" "}
                <a href="https://alperen.io" target="_blank" rel="noreferrer">
                    Alperen Sert
                </a>
            </div>
            <div className="text-gray-400">
                v@{process.env.ALPEREN_SITE_VERSION ?? pkg.version}
            </div>
        </footer>
    )
}
