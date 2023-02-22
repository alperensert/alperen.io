import React, { FC, PropsWithChildren } from "react"
import { Footer, Header, ModeSwitcher, ScrollToTop } from "."
import "../style.min.css"
import { ThemeProvider } from "../contexts"

export const Layout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <ThemeProvider>
            <div id="site-wrapper" className="min-h-screen">
                <Header />
                {children}
                <Footer />
            </div>
            <ScrollToTop />
            <div className="top-0 right-0 hidden p-10 lg:absolute lg:block">
                <ModeSwitcher />
            </div>
            <div id="portal"></div>
        </ThemeProvider>
    )
}
