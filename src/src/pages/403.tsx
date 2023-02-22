import * as React from "react"
import { Link } from "gatsby"
import { Layout, SectionTitle, SEO } from "../components"
import { IoArrowForwardOutline } from "react-icons/io5"

const ForbiddenPage = () => {
    return (
        <Layout>
            <section className="section-container flex flex-col items-center space-y-4 lg:!my-60">
                <SectionTitle
                    beforeText="you lost?"
                    afterText="403 Forbidden"
                />
                <p className="text-center text-gray-400">
                    <span>
                        Sorry, I cannot allow you to pass from this route.
                    </span>
                    <Link
                        to="/"
                        className="mt-4 flex items-center justify-center space-x-1 text-sm"
                    >
                        <span>Go to home</span>
                        <IoArrowForwardOutline className="text-xl " />
                    </Link>
                </p>
            </section>
        </Layout>
    )
}

export default ForbiddenPage

export const Head = () => <SEO title="Forbidden" />
