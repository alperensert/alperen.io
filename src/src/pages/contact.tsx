import React from "react"
import { ToastContainer } from "react-toastify"
import { Layout, SectionTitle, SEO } from "../components"
import { ContactForm } from "../components"
import "react-toastify/dist/ReactToastify.css"

export const Contact = () => {
    return (
        <Layout>
            <section className="section-container flex flex-col space-y-10">
                <SectionTitle beforeText="Reach me" afterText="Contact" />
                <p className=" mx-auto my-5 max-w-3xl text-sm leading-7 text-gray-400">
                    I value open communication and welcome your messages related
                    to my blog or professional work. For inquiries or
                    collaboration opportunities, please contact me at{" "}
                    <b>business@alperen.io</b>. I check my email regularly and
                    will respond as soon as possible. Thank you for your
                    interest in connecting with me.
                </p>
                <ContactForm />
            </section>
            <ToastContainer />
        </Layout>
    )
}

export default Contact

export const Head = () => <SEO title="Contact" />
