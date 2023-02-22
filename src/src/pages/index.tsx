import * as React from "react"
import { Author, Layout, SEO } from "../components"
const IndexPage: React.FC = () => {
    return (
        <Layout>
            <Author />
        </Layout>
    )
}

export default IndexPage

export const Head = () => <SEO title="Home Page" />
