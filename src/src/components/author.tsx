import React from "react"
import {
    IoLogoInstagram,
    IoLogoTwitter,
    IoMail,
    IoLogoGithub,
} from "react-icons/io5"
import { StaticImage } from "gatsby-plugin-image"
import { SiteConfig } from "../site-config"
import { useSite } from "../hooks"
import { useEffect } from "react"
import { createRef } from "react"

export const Author = () => {
    const fakeRef = createRef<HTMLDivElement>()
    useEffect(() => {
        const wrapper = document.getElementById("site-wrapper")
        if (!wrapper) return
        wrapper.classList.add("flex", "flex-col", "justify-between")
        return () =>
            wrapper.classList.remove("flex", "flex-col", "justify-between")
    }, [fakeRef.current])
    const site = useSite()
    return (
        <div className="author py-30 lg:py-0" ref={fakeRef}>
            <StaticImage
                src="../images/author.jpg"
                className="author-image h-fit w-fit"
                imgClassName="rounded-full"
                alt={
                    site?.siteMetadata?.owner
                        ? `Photo of the website owner ${site.siteMetadata.owner}`
                        : ""
                }
                width={300}
                aspectRatio={1}
                placeholder="blurred"
                loading="eager"
            />
            <div className="flex flex-col space-y-6">
                <h1 className="text-3xl">
                    Hey! I’m <b>Alperen</b>
                </h1>
                <p className="text-sm leading-loose text-gray-600 dark:text-gray-400">
                    Born in Turkey. Currently, studying in Computer Programming
                    at Karadeniz Technical University. Freelancer as a Backend
                    developer.
                </p>
                <ul className="author-social">
                    {SiteConfig.socialLinks?.instagram ? (
                        <li>
                            <a
                                aria-label="Instagram"
                                href={SiteConfig.socialLinks.instagram}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoInstagram />
                            </a>
                        </li>
                    ) : null}
                    {SiteConfig.socialLinks?.twitter ? (
                        <li>
                            <a
                                aria-label="Twitter"
                                href={SiteConfig.socialLinks.twitter}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoTwitter />
                            </a>
                        </li>
                    ) : null}
                    {SiteConfig.socialLinks?.github ? (
                        <li>
                            <a
                                aria-label="GitHub"
                                href={SiteConfig.socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoLogoGithub />
                            </a>
                        </li>
                    ) : null}
                    {SiteConfig.socialLinks?.email ? (
                        <li>
                            <a
                                aria-label="E-mail"
                                href={"mailto:" + SiteConfig.socialLinks.email}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <IoMail />
                            </a>
                        </li>
                    ) : null}
                </ul>
            </div>
        </div>
    )
}
