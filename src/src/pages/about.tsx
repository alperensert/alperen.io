import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import { Layout, SectionTitle, SEO } from "../components"

export const About = () => {
    return (
        <Layout>
            <div className="section-container">
                <SectionTitle beforeText="WHO I AM" afterText="About Me" />
            </div>
            <div className="px-5 xl:px-20">
                <StaticImage
                    src="../images/author-about.jpg"
                    alt="Alperen Sert"
                    className="w-full"
                />
            </div>
            <div className="section-container">
                <h3 className="mb-8 text-2xl font-medium">
                    Hey there, what`s up?
                </h3>
                <p className="text-sm leading-8 tracking-wider">
                    I am Alperen, as you can notice from the domain name. I born
                    in Trabzon, Turkey in 199x.
                    <br />
                    <br /> In my childhood, always been interested about
                    Computers. But not for the programming, As you can imagine
                    it was just for gaming. Then, in my 11-12s, I met with
                    WordPress. That&lsquo;s where this blogging passion comes
                    from. I learned some PHP first, to be able to make changes
                    in the parts of the themes want. Then I interested with
                    designs & themes. I learned CSS & JavaScript for making some
                    changes in themes. I developed my skills over time and I
                    selled some themes on Envato. <br />
                    <br />
                    After a time, I decided that I wanted to be a backend
                    developer. Currently, I am using ASP.NET Core for modern and
                    fast backend projects.
                </p>
            </div>
        </Layout>
    )
}

export default About

export const Head = () => <SEO title="About" />
